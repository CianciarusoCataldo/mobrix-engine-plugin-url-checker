/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker MoBrix-engine-plugin-url-checker} type definitions file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-url-checker
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineParser, MoBrixEnginePlugin } from "mobrix-engine-types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker MoBrix-engine-plugin-url-checker} query parameter handler
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-url-checker
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UrlCheckerPluginQueryHandler = MoBrixEngineParser<
  {
    /** Query parameter value */
    urlParam: any;
  },
  UrlCheckerPluginSettings
>;

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker MoBrix-engine-plugin-url-checker} settings
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-url-checker
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UrlCheckerPluginSettings = {
  urlChecker?: {
    /** Query parameters handler functions, called when their parameter is contained inside the url query */
    queryParameters?: Record<string, UrlCheckerPluginQueryHandler>;

    /** Parameter handler called before the store init process */
    before?: string[];

    /** Parameter handler called after the store init process */
    after?: string[];
  };
};

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-url-checker MoBrix-engine-plugin-url-checker} interface
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-url-checker
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UrlCheckerPlugin = MoBrixEnginePlugin<UrlCheckerPluginSettings>;
