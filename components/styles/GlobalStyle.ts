import { createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		line-height: 2;
    font-family: ${props => props.theme.systemFontStack};
    font-size: 16px;
	}
	a {
    color: ${props => props.theme.primaryPurple};
	}
  #__next, html, body {
    height: 100%;
  }
  #__next {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h1,
  h2 {
    font-weight: 900;
  }

  h1 {
    font-size: 3.375rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 1.25;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-weight: 200;
    font-size: 1.875rem;
  }

  p, li {
    font-size: 1.25rem;
    font-weight: 200;
    line-height: 1.5;
  }

  li {
    margin: 0.5rem;
  }
`;

export default GlobalStyle;
