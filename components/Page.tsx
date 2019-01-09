import React, { Fragment } from "react";
import Header from "./Header";
import Footer from './Footer';
import Meta from "./Meta";
import styled, { ThemeProvider } from "./styles/styled-components";
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;


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
