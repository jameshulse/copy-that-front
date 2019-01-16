import React, { Fragment } from "react";
import Router from 'next/router';
import Header from "./Header";
import Footer from './Footer';
import Meta from "./Meta";
import styled, { ThemeProvider } from "./styles/styled-components";
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import * as gtag from '../lib/gtag'

const Inner = styled.div`
  flex-grow: 1;
  width: 100%;
`;

// Set Google Analytics to track page views
// No need to exclude localhost as this is done in Google Analytics console
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Meta />
      <Header />
      <GlobalStyle />
      <Inner>{children}</Inner>
      <Footer/>
    </Fragment>
  </ThemeProvider>
);

export default Page;
