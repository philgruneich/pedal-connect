import App from 'next/app';
import Head from 'next/head';
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import 'normalize.css';

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    super.componentDidCatch(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Something went wrong.</h1>
    }

    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Container>
              <Component {...pageProps} />
            </Container>
          </Wrapper>
        </ThemeProvider>
      </>
    )
  }
}

const GlobalStyle = createGlobalStyle`
:root {
  box-sizing: border-box;
  font-family: 'Apercu Pro', Apercu, 'Comic Sans', Helvetica, sans-serif;
  --yMargin: 10.75vmin;
  --xMargin: 7.125vmin;
  &:before,
  &:after {
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
}
html,
body {
  font-size: 10px;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

const Wrapper = styled.div.attrs({
  'data-testid': 'wrapper'
})`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.main`
  position: relative;
  flex-grow: 1;
  flex-direction: column;
  display: flex;
`;
