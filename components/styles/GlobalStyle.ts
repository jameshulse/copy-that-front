import { createGlobalStyle } from './styled-components';

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
    font-family: ${props => props.theme.systemFontStack};
	}
	a {
    color: ${props => props.theme.primaryPurple};
	}
`;

export default GlobalStyle;
