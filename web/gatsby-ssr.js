import React from 'react';
import Layout from './src/components/Layout';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/SctoGroteskA-Bold.d6497298.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SctoGroteskA-Bold"
    />,
    <link
      rel="preload"
      href="/fonts/SctoGroteskA-Medium.2ede3563.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SctoGroteskA-Medium"
    />,
    <link
      rel="preload"
      href="/fonts/SctoGroteskA-Regular.1e986128.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="SctoGroteskA-Regular"
    />,
    <link
      type="text/css"
      rel="preload stylesheet"
      as="style"
      href="/typed.scss"
    />,
  ]);
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
