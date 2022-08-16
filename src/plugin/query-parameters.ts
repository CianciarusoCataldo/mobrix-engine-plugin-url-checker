/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker mobrix-engine-plugin-url-checker} internal query parameters file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-url-checker?id=config
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineConfig } from "mobrix-engine-types";

import { computeValue } from "mobrix-utils";

import { UrlCheckerPluginQueryHandler } from "./types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker mobrix-engine-plugin-url-checker} internal query parameters
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-url-checker?id=config
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const queryParametersHandlers: Record<
  string,
  UrlCheckerPluginQueryHandler
> = {
  config: ({ urlParam, config }) => {
    const parsedConfig = computeValue<MoBrixEngineConfig>(
      () => JSON.parse(urlParam),
      {}
    );

    return { ...config, ...parsedConfig };
  },

  appName: ({ urlParam, config }) => ({ ...config, appName: urlParam }),
};
