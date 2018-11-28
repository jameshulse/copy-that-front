import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';
import styled, {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

const theme = {
  maxWidth: '1000px',
  black: '#000',
  purple: '#555bcf',
};

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
	}
	a {
		text-decoartion: none;
		color: ${theme.black};
	}
`;

const Page = ({ children }) => (
  <ThemeProvider theme={{ purple: '#555bcf' }}>
    <Fragment>
      <Meta />
      <Header />
      <GlobalStyle />
      <Inner>{children}</Inner>
    </Fragment>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
