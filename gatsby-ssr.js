/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import 'ress/ress.css';
import 'url-search-params-polyfill';

import wrapWithProvider from './wrap-with-provider';
export const wrapRootElement = wrapWithProvider;
