import App, { Container } from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import normalize from 'styled-normalize';

import theme from './_theme';

const Global = createGlobalStyle({
  ...normalize,
  body: { background: theme.colors.white, color: theme.colors.black }
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Global />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
