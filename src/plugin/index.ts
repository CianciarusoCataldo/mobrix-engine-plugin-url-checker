/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker MoBrix-engine-plugin-url-checker} init file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-url-checker
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { computeValue } from "mobrix-utils";

import { UrlCheckerPlugin } from "./types";
import { queryParametersHandlers } from "./query-parameters";

import { processParams } from "./helper";
import { createMoBrixEnginePlugin } from "mobrix-engine-tools";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker MoBrix-engine-plugin-url-checker} create function. To use it, include it inside
 * your MoBrix-engine config
 *
 * @returns `url-checker` plugin
 *
 * @example <caption> Use url-checker plugin inside MoBrix-engine config </caption>
 *
 * const urlCheckerPlugin = require("mobrix-engine-plugin-url-checker");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [urlCheckerPlugin],
 *   urlChecker: {
 *     queryParameters: {
 *       testParam: ({ urlParam }) => {
 *         alert("test value" + urlParam);
 *       },
 *     },
 *     preInit: ["testParam"],
 *   },
 * };
 *
 * module.exports = { config };
 *
 * @see https://cianciarusocataldo.github.io/mobrix-plugin-url-checker
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const urlChecker: UrlCheckerPlugin = createMoBrixEnginePlugin(
  "mobrix-engine-url-checker",
  () => {
    let params: Record<string, any> = {};

    if (window.location.search) {
      new URLSearchParams(window.location.search).forEach((urlParam, param) => {
        params[param] = computeValue(
          () => urlParam.replace(/(^"|"$)/g, "").replace(/(^'|'$)/g, ""),
          urlParam
        );
      });

      if (window.history.replaceState) {
        window.history.replaceState(
          window.history.state,
          window.document.title,
          window.location.href.split("?")[0]
        );
      }
    }

    return {
      field: (config) => {
        const urlCheckerConfig = config.urlChecker || {};
        const initialParams = Object.keys(queryParametersHandlers);
        const params = urlCheckerConfig.before || [];

        return {
          name: "urlChecker",
          content: {
            queryParameters: urlCheckerConfig.queryParameters || {},
            before: initialParams.concat(params),
            after: urlCheckerConfig.after || [],
          },
        };
      },

      before: ({ config }) =>
        processParams({
          elements: config.urlChecker.before,
          config,
          params,
        }),

      after: ({ config, store }) =>
        processParams({
          elements: config.urlChecker.after,
          config,
          store,
          params,
        }),
    };
  }
);

export default urlChecker;
