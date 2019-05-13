/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// reset css
import 'ress/ress.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import wrapWithProvider from './wrap-with-provider';

if (process.env.NODE_ENV === 'development') {
  console.log(
    `%c${process.env.NODE_ENV}`,
    'color: #ffb3ab;font-size:2.4rem;font-weight:bold;'
  );
}

/* eslint-disable import/prefer-default-export */
export const wrapRootElement = wrapWithProvider;
