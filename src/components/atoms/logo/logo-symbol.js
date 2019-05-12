import React from 'react';
import styled from 'styled-components';

import Color from '../../../constants/styles/color';

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
`;

const Path = styled.path`
  fill: ${Color.BLACK};
`;

const LogoSymbol = () => (
  <Svg viewBox="0 0 500 500" width="500" height="500">
    <title>BUMP OF CHICKEN</title>
    <path fill="none" d="M450 250c0 110.5-89.5 200-200 200S50 360.5 50 250 139.5 50 250 50s200 89.5 200 200" />
    <ellipse fill="none" cx="250" cy="250" rx="200" ry="200" />
    <Path d="M220.5 288.5c4.2 0 8.2-.9 11.9-2.5 3.7-1.7 7-4.1 9.7-7.4 2.7-3.2 4.9-7.2 6.5-11.8 1.5-4.6 2.3-10 2.2-16-.1-5.4-.9-10.4-2.4-14.8-1.6-4.5-3.7-8.3-6.5-11.5s-6.1-5.7-9.9-7.4c-3.8-1.7-8-2.6-12.4-2.5-4.6 0-8.8 1-12.5 2.8-3.8 1.8-7 4.4-9.7 7.6-2.7 3.2-4.8 7.1-6.2 11.6-1.5 4.4-2.2 9.4-2.1 14.6.1 12.2 3 21.6 8.6 27.9 5.5 6.3 13.2 9.5 22.8 9.4m-12.6-16.6c-1.3-2.5-2.2-5.6-2.8-9-.6-3.5-.9-7.3-1-11.1 0-3.6.2-7.2.9-10.7.6-3.4 1.6-6.5 2.9-9.2 1.3-2.6 2.9-4.7 4.9-6.3 1.9-1.5 4.2-2.3 6.9-2.3 2.9 0 5.3.7 7.2 2.1 2 1.5 3.6 3.5 4.9 6 1.3 2.6 2.3 5.7 2.9 9.1.6 3.5 1 7.2 1 10.9 0 3.8-.3 7.4-1 10.9-.7 3.4-1.7 6.5-3.1 9.1-1.3 2.5-3 4.6-4.9 6.2-1.8 1.5-3.9 2.2-6.3 2.2-3.1 0-5.7-.7-7.6-2.1-2-1.4-3.7-3.4-4.9-5.8M115.1 162.2c4.4 1.3 9.4-1.3 6.9-4.8-2.1-2.9 3.3-8.7 10-2.8s30.9 27.9 30.9 27.9c1.1 1 3.5 4.2 1.4 8.3-2 3.9-3.2 6-1 7.7 3 2.2 6.6-1.6 8.2-3.9 0 0 4.2-7.6 9.7-12.1 7.4-6.1 11.9-10.5 14-16.8 1.4-4.2.5-8.2-.6-10.8s-3-5.2-5.8-7.7c-2.1-1.9-4.1-3.3-6.2-4.2h-.1c-2.1-.9-4.3-1.4-6.4-1.5-1.5 0-3.1.1-4.7.5h-.1c-3.3.6-4.3-.2-4.4-2.2v-.6-.2c0-.6-.1-1.3-.1-1.9-.2-1.7-.8-3.3-1.7-5-.9-1.6-2.2-3.3-3.9-4.8s-3.4-2.7-5.2-3.5c-1.1-.5-2.3-.9-3.4-1-2.8-.5-10.9-.5-15.3 4.4s-6.1 7.1-11.1 12.6c-6.9 7.7-13.3 10.4-14.8 15.7-.6 1.8 0 5.6 3.7 6.7m47.7-6.3l1.5-1.2c1.3-.9 2.6-1.4 4-1.6 1.3-.2 2.8 0 4.4.6 1.7.6 3.7 1.9 5.8 3.8 2.9 2.6 4.6 5 5.1 7.1.4 2-.3 3.9-2.2 6l-.2.2-1.1 1.1c-.4.4-.8.7-1.1 1.1-2.6 1.8-5.6.2-7.7-1.4-1.3-1.1-2.9-2.4-4.7-4.1l-4.1-3.7c-3.8-3.4-2.7-5.1.3-7.9m-24.5-18.1l.1-.2c.2-.2.4-.5.7-.7.5-.4.8-.7 1-.9 1.6-1.3 3.2-2 4.8-2.1.9-.1 1.9.2 3 .7 1.4.6 2.8 1.6 4.4 3 1.8 1.6 3 3.1 3.7 4.4.7 1.3.9 2.5.9 3.7s-.4 2.4-1 3.5c-.1.3-.3.5-.5.8-.2.2-.3.5-.5.8-.4.5-.8 1-1.2 1.6-1.5 1.2-3.2.5-4.5-.7l-9.3-8.4c-1.6-1.4-2.9-3.6-1.6-5.5M212.4 338.5c-4.3-1.6-8.4-3.2-12.2-5.4-3.9-2.3-9.9-7.9-11.4-8.9-.5-.3-6-4.3-9.5-8.2-1.9-2.1-5.6-8.1-6.6-9.6-.6-.9-3.4-2.1-5.2-.3-1.8 1.8 0 4.8.6 5.8.7 1.2 1.9 4.1-1.7 6.8-3.6 2.7-6.7 4.8-9.5 6.5-2.8 1.8-5.8 2.3-9.2-2.8l-6.8-10.3c-3.2-4.8-1.9-6.4 1.5-8.5 2.7-1.6 6.1-4.1 8.5-5.4 4.3-2.3 6.9-.7 7.9.5.5.7 3.6 2.9 5.8 1.3 2.3-1.6.6-4.3.6-4.3s-4-6.2-6.1-11.1-2.3-8.3-2.6-10.5c-.2-1-1.3-3.1-4.1-2.9s-3.9 3.2-3.1 5.7c.9 2.5.4 5.8-3.6 8.3-7.6 4.7-32 17.6-36.7 20.2s-7.4 3.3-10.2-.8c-2.2-3.3-3.6-3.6-5.6-3.1s-2.5 3.4-1.4 5.2c1.1 1.7 4.3 8 6.5 12.5s3.8 9.6 5.1 11.8c.6.9 2.6 2.9 5.1 1.9 2.4-1 2.3-2.6 2-4.5-.5-2.3-2-5.9 2.8-8.9s7.2-3.6 11.4-6.1c3-1.8 6.2-.7 8.8 3.3l6.6 10c3.2 4.8 1.4 9-3.2 12 0 0-3.4 2.2-7.7 4.8-4.3 2.6-6.6.3-9.1-2.2-.7-.8-3.6-2.3-6.1-.9-2.5 1.5-1.5 4.4-.5 5.8 1.2 1.7 6.7 7 8.8 9.7 2.1 2.7 8.2 9.7 9.5 11.7 1.7 2.6 5 2.8 6.4 1.3s1-3.2-.2-5c-1.1-1.7-3.9-5.9 2.6-10.2 6.5-4.3 31.5-21.3 36.2-24.2 4.6-2.9 6.7-1.6 9.8 2.2 3.1 3.7 3.6 6.6.4 11.9-3.1 5.3-16.2 27.5-19.7 33.3-3.5 5.9-8.2 4.2-9.7 3.5-1-.4-3.8-1.1-5.3 1.3s.8 5.1 1.8 5.7c1.6 1 9.8 5 11.6 6 1.7 1 8.6 6.1 10.6 7.3.9.5 4.1 1 5.5-1 1.4-1.9.4-4-1.6-5.8s-5.4-3.4-1.5-9.9c3.8-6.4 16.1-27.5 19.7-33.3 3.6-5.8 6.2-6.2 10.5-5.1s5.6-1.1 6.1-2.2c.4-1.2.9-3.6-2.6-4.9M242.4 134.9c-.4-3.6-1.3-7.6-2.8-11.8 0 0-7.2-21.1-8.5-25.2-1.3-4 2.5-5.1 4.7-5.9 2.1-.8 3.7-2.1 3.4-4.6-.3-2.6-2.8-3.6-5.6-2.7-3.1 1-5.9 1.6-10.7 2.4-4.9.9-7.3.6-10.5 1.2s-4.2 2.8-3.4 5 3.8 2.7 6.1 2.4c2.4-.3 5.6-.4 7.4 4.7 1.8 5.1 9.1 25.2 9.1 25.2 2.3 6.7 2.8 11.9 1.4 15.7-1.4 3.7-4.5 6.4-9.2 8.1-2.2.7-4.2.9-6 .6-1.9-.3-3.6-1.1-5.1-2.2-1.6-1.2-3-2.7-4.3-4.6-1.3-2-2.4-4.2-3.2-6.6l-8.9-25.5c-.6-1.8-1.1-3.3-1.4-4.6-1-3.9 2.3-5.3 4.5-6.4s3.5-3.9 2.8-5.6-3-3-6.3-1.5-5.8 2.9-11.3 4.9c-5.5 1.9-10.4 3.4-12.2 4-2.7.7-5.1 2.9-4.5 4.9.9 2.8 2.6 3.4 6.7 2.6 3.8-.7 6.3-.1 8.3 4.3l.6 1.5 9.2 26.1c1.6 4.5 3.4 8.2 5.5 11.1.2.3.4.5.6.8 2 2.6 4.4 4.6 6.9 6 2.8 1.4 6 2.1 9.5 2 3.3-.1 7-.8 10.9-2.2 4.2-1.4 7.6-3.3 10.1-5.6 2.6-2.3 4.4-5.1 5.4-8.2.8-3 1.1-6.5.8-10.3M385.7 161c-.2-2.5-.7-5-2.1-7.2-2.9-4.6-8.7-8.8-14.2-15s-8.7-13.1-13.6-15c-1.9-.7-5.7-.4-7.1 3.1-1.7 4.3.6 9.5 4.2 7.3 2.9-1.7 8.7 3.9 2.9 9.3-5.8 5.3-24.4 22.5-28.2 25.9-3.7 3.4-9.3 5.2-13.4 1.1-3.3-3.3-1.2-9.8-.5-12.4 0 0 8.9-30.4 10.8-36.8s3.1-6.9 7.3-5.6c2.7.8 4.8.8 5.9-1.5s-.3-4.4-3.6-5.5c-3.3-1-5.8-2.3-11.5-5.1-5.5-2.7-7.3-3.9-10.5-5.8-1.8-1.1-5.3-2-6.1.3-.9 2.3.3 3.6 2.3 5.3 3 2.6 4.5 3.6 1 8.4-5.1 6.9-12 16.3-16.4 22.3-2.7 3.7-4.4 2.5-4.8-2.4-.5-7.1-1.3-17.3-1.8-25.3-.4-5.4.7-8.7 4.3-9 1.3-.1 4.8-.2 5.2-2.5.4-2.3-.9-3.8-4.5-4.3-2-.3-7.3-1.2-15.1-2.4S263 84 257.3 84.9c-2 .3-4.9 2.9-4.1 6.6 1 4.5 5.8 7.5 7.6 3.6 1.4-3 9.5-1 7.7 5.8-1.9 6.8-10.4 36.7-11.6 40.2-1.2 3.4-3.5 5.7-6.5 6.2s-9.6-.3-9.3 4.7 9.1 3.6 15.8 4.1c6.7.5 14 3.9 15.7-.1 1.2-2.7-.8-4.7-4.3-6-3.4-1.2-4.6-3-3.5-7.3 1.1-4.4 3.1-10.7 5.5-19.2 1.4-4.9 2.7-5 3.2 1 .6 8.3 1.6 20.1 2.2 28.1.7 8.1 6 11.1 11 3.9.3-.5.5-.8.5-.8 1.5-2.3 3-4.5 4.5-6.4 0 0 7-9.5 12.5-16.9 2.7-3.7 3.8-3.5 2.4 1.2-2.6 8.5-4.8 17.5-5.9 20.5s-1.1 6.1-5.1 5.3c-3.2-.7-5.3-1.4-6.6.8-1.3 2.2-.4 4 2 5.5 1.8 1.2 5.8 1.9 10.1 4.8 4.2 2.9 6 5.4 9.1 8.4s7.3 5.7 10.4 9.2c3.9 4.4 4.1 6.3 6 9.1 1.5 2.1 3.3 3.2 5.8 2.1 1-.4 1.8-1.9 1.7-4-.2-2.1-1.3-4.9-2.1-6.6-1.7-3.2 1.1-6.1 2.6-7.4 0 0 2.5-2.3 5.1-4.7 3.2-2.9 6.7-2.9 13 1.4 2.7 1.9 5.5 3.2 8.3 3.8 2.9.7 5.9.6 8.8-.2 3-.8 6-2.6 9-5.3 2-1.8 3.5-3.7 4.6-5.6.3-.6.6-1.2.9-1.9 1.1-2.7 1.5-5.3 1.4-7.8m-11-2.3c-.1.6-.3 1.3-.9 2.3-.8 1.4-2.2 3.3-4.8 5.6-1.9 1.7-3.6 3-5.1 3.8-1.4.7-2.6 1-3.9 1-1 0-2.1-.4-3.2-1-.3-.3-.7-.5-1.1-.7-.7-.5-1.5-1.1-2.3-1.9-.9-1.7.1-4 2.1-5.9 3.2-2.9 7.5-6.9 9.8-9 2.1-1.9 4.6-2.4 6.3-.9.2.3.5.5.7.8.1.1.2.3.3.4 1.7 2.1 2.3 3.9 2.1 5.5" />
    <Path d="M254.6 398.5c.7-3.7.1-7-2.4-7.5-2.8-.6-4.9 1.6-5.5 4.7-.5 2.6-2.2 7.3-5.8 9.8-3.5 2.5-8.5 2.5-11.1 2.3-3.1-.2-5.7-1.2-7.7-3-2.1-1.8-3.7-4.1-4.9-6.8-1.2-2.8-2.1-6-2.5-9.5-.4-3.6-.5-7.2-.3-10.7.2-3.2.7-6.5 1.5-9.9.8-3.2 1.9-6.2 3.4-8.8 1.5-2.5 3.4-4.6 5.7-6 2.2-1.4 5.1-2 8.5-1.8 4.3.3 7.8 1.8 10.5 4.4 3.8 3.7 4.6 8.3 1.9 10.1-3.6 2.3-.8 6.7 3.7 7.5 3.8.7 6-1.5 6.5-4.2.6-3.2.1-5.8 0-9.7-.1-4.1.5-6.7 1.1-9.5.6-2.9-.3-4.6-2.5-5-3.2-.5-3 2.7-8.9.7s-8.8-3-11.6-3.2c-4.6-.3-9 .2-13.1 1.5s-7.8 3.6-10.9 6.6c-3.1 3-5.7 6.8-7.6 11.4-1.9 4.5-3.1 9.9-3.5 15.9-.8 11.4 1.3 20.5 6.1 27.2 4.9 6.7 13.9 10.7 23.5 11.3 9.6.6 14-3.2 16.7-1.2 1.1.8 2.9 2.8 5.5 2.4 2.4-.4 3.2-1.9 2.8-5.2 0-2.9.1-9.7.9-13.8M301 229.5c-.4-2.6-.2-5.7 0-8.8s-1-5.1-6-4.9c-4.9.2-15.1.5-23.4.8-8.7.3-18.4-2.4-23.2.2-1.8 1-4 4.1-2.2 7.4 2.1 4.1 7.6 5.7 8.3 1.5.6-3.5 5.7-3.7 6 5s.4 34.6.3 42.5c0 5.1-3 7-6.1 7s-4.9 1.6-5.1 3.5c-.2 2.9 2.3 4.1 5.6 3.8 1.4-.1 6.7-.7 12.3-.7 5.1 0 5.5.1 12.9.6 3.1.2 4.1-1.5 4.1-3.6 0-1.9-2.3-3.4-5.2-3.6-4.1-.3-4.8-3.6-4.7-6.4v-12.6c0-5.9 1.9-6.4 5-6.2 2.6.1 3.2 4.6 3.4 6.4.3 1.6 1.3 3.5 3.7 3.5 2.4 0 3.2-2.1 3.2-3.2 0-2.4-.8-6.1-.8-11.3s.6-7.7.7-10.1c.1-2.4-.8-4.5-3-4.6-2.2 0-3.3 1.3-3.7 2.7-.5 1.4-.3 3.4-.5 4.5-.1.7-.9 2.9-4.1 2.8-3.2 0-4.4-2.6-4.4-6.1 0-2.3-.1-4.9-.1-6.9-.1-5.2 1.7-8.3 10.1-8.4 4.5 0 7.4.1 8.6 1.3 1.6 1.4 2 4.1-.2 5.9-1.6 1.4-1.7 4.9 4.1 4.8 5.9 0 4.7-4.6 4.4-6.8M392.9 321.7c-2.5-1.4-3.9-2.5-7-5.1-3-2.6-4.7-4.6-7.5-6.2-2.4-1.3-5.5-1-7.4 2.4-2.3 4-.6 9 3.4 7.7 1.1-.4 2.2-.1 3.2.6.2.2.4.4.6.5 1.4 1.4 4.4 5.2 4.7 8.1.2 2.2-1.3 7.9-5.3 13.2-4 5.3-8.1 5.6-11.1 3.8-2.7-1.7-5.8-4.1-8.9-6.7-4.6-3.8-3.7-5.5-1.7-7.8 1.7-1.9 5.6.4 7.1 1.4 1.4.8 3.5 1.2 5.1-.7 1.5-1.9.4-3.8-.5-4.6-1.9-1.5-5.2-3.3-9.2-6.6-4-3.3-5.6-5.4-7.3-6.9-1.8-1.6-4-2.3-5.4-.6-1.4 1.7-1 3.4-.3 4.6.8 1.2 2.4 2.4 3.1 3.2.4.5 1.6 2.5-.4 5s-4.8 1.7-7.5-.4c-1.8-1.4-4.9-3.7-6.5-5-4.1-3.3-7.1-6.7-1.8-13.3 2.8-3.5 4.8-5.6 6.5-5.8 2.1-.3 4.4 1 4.4 3.8 0 2.1 2.7 4.4 6.4-.1 3.7-4.6-.7-6.6-2.6-7.8-2.3-1.4-4.5-3.4-6.8-5.5s-4.6-2.5-7.6 1.5c-3 3.9-4.8 9.2-8.1 13.4s-6.3 7.3-10.1 11c-3.8 3.6-9.2 9-12.5 11.1s-7.3 3.5-9.2 4.4c-2.2 1-2.7 2.8-2.2 4.1.5 1.2 1.7 3.1 4.5 1.9 2.4-1 3.1.1 2.8 2.7-.8 5.9-2.8 15.8-3.6 19.2-1.3 5.6-3.1 6.2-4.7 1.9-1.3-3.5-4-10.6-5.2-14.4s1.1-4.2 2.8-5.1c1.7-.9 3-2.2 2.4-4.1-.5-1.9-1.9-3.6-4.8-2.3-2.9 1.4-5.6 2.5-10.1 3.8s-8.6 1.9-10.9 2.3c-1 .2-3.9 1-3.7 3.6.2 2.6 1.6 3.7 5 3.5 3.4-.3 5.2-.5 7 4.7s12.2 35.3 14.1 41c1.8 5.8 1.3 6.6-2.9 8.4-2.9 1.3-4.1 2.6-3.6 4.4.6 1.8 1.9 2.5 4 2.1 3.7-.8 8.2-2.8 13.2-4.4 8-2.4 9.7-2.8 12.6-3.5s3.5-2.1 2.9-4.2c-.7-2.1-3-1.8-4.7-1.5-3.4.6-5 1.9-7.3-4.5-2.3-6.5-3.3-9.8-3.3-9.8-1.5-4-.2-7.2 3.7-5.8l1.8.9c.4.3.8.4 1.1.6 1.4.8 2.9 1.7 4.2 2.6 1.3.9 4.5 2.9 7.8 5.1s6.3 4 3.1 6.2c-2.5 1.7-3.3 3.4-2.4 4.9.8 1.3 2.2 1.5 4.9.3s6.8-4.5 11.3-7.1c4.6-2.6 8.5-4.1 11.3-6.1s2.2-3.5 1.3-4.6c-.9-1.1-3.1-1.4-5.1.2s-6 0-9.7-1.9c-3.8-1.9-17.6-10-21.3-12.2-3.6-2.2-5.6-3.1-4.8-9 .8-6.1 2-15.2 2.8-19.3.7-3.8 1.4-5.4 5.3-8.3s6.4-4.6 10.5-1.8c.7.6 2.8 2.3 2.8 2.3s26.4 23.5 30 26.6c3.7 3.1 3.2 4.9 1.1 8.2-1.6 2.6-2.3 4.2-.7 5.9 1.1 1.2 4.4 2 6.2-.5 2-2.7 12.8-15.8 17.2-21.1 4.4-5.3 13.5-17.7 15.1-20.5 2.5-4.1 1.7-6.2-1.6-8M409.6 271.3c-1.6-.4-4.1.3-4.9 3.8-1.2 5.6-5.8 5.3-10.7 4.4-5-.9-23.2-4.2-26-4.7-2.7-.5-5-1.3-.5-3.7 3.1-1.7 36.3-20.2 41.7-23.3 6.4-3.7 4.6-8.8 4.1-13.1-.4-4.3.9-10.4-2.4-14.8-1.2-1.6-4.6-3.3-7.7-1.1-3.7 2.7-4.5 8.3-.3 8.4 3.5.1 4.8 7.5-3.9 6.7-8.7-.8-37.1-3.6-42-4.1s-6.2-2.4-7.3-5.2c-1.1-2.9-1.5-9.5-6.3-8.2s-1.9 9.6-1.1 16.3-1.3 14.5 3 15.4c2.8.6 4.5-1.7 5.1-5.3s2-5.3 6.5-4.8c4.6.4 20.7 2.3 25.9 2.9 5.2.6 4.2 3.2 1.2 5s-23.1 12.9-29.4 16.3c-3.6 2-4.6.6-4.6-1.2 0-2-.7-4.3-3-4.6-2.3-.3-3.3 2-3.4 4.5-.2 2.4-.3 5.8-1.5 11.6-1.1 5.9-4.7 10.4-3.6 15 .5 2 3.1 4.3 6.9 3.6 4.5-.8 7.5-5.6 3.8-7.8-2.4-1.4-1.8-3.6.8-3.1s39.1 7.3 45.2 8.6c6.1 1.3 5 4.9 5.2 7.2.1 2.3 1.2 3.9 3.2 4.3 2.1.4 4.2-.9 4.5-3.9s.7-6 1.4-10 2.6-9.3 2.8-10.8c.3-2.1-1.1-3.9-2.7-4.3M106.8 282.3c3.8-.5 6.7-2.2 6.5-4.8-.3-2.9-3-4.2-6.1-3.8-2.6.4-7.3.2-10.7-2.5-3.5-2.7-5.6-7.6-6.3-12.4-.7-4.8-.3-10.5 1.7-13.9 1.4-2.5 3.4-4.7 5.9-6.4 2.6-1.8 5.6-3.3 9-4.4 3.4-1.1 6.5-1.9 10-2.3 3.2-.4 6.5-.5 9.9-.4 3.2.1 6.3.7 9.1 1.8 2.7 1 4.9 2.5 6.8 4.6 1.8 1.9 2.8 4.6 3.2 8 .5 4.3-.3 8.1-2.3 11.2-2.8 4.4-7 6.3-9.2 3.9-2.8-3.1-6.6.6-6.5 5.3.1 3.9 2.6 5.7 5.2 5.6 3.1-.1 5.5-1.1 9.2-2.1 3.8-1 6.3-.9 9.1-1 2.7 0 4.2-1.3 4.2-3.4-.1-3.2-3-2.4-2.2-8.5.8-6.2 1.2-9.2.9-12-.5-4.6-1.7-8.8-3.7-12.6s-4.7-7-8.1-9.6c-3.4-2.6-7.5-4.4-12.3-5.6-4.7-1.1-10.2-1.4-16.1-.7-11.4 1.3-20.2 5.1-26 11.4-5.9 6.4-7.5 17.6-6.2 27.6 1.7 11.9 7.8 18.4 5.6 24.3-.4 1.3-1.9 3.9-.7 6.3 1.1 2.2 2.9 2.6 6 1 2.6-1.3 9.9-4 14.1-4.6" />
  </Svg>
);

export default LogoSymbol;
