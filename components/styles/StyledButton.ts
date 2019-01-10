import styled, { css } from './styled-components';

const buttonCSS = css`
  padding: 1em;
  background: ${props => props.theme.purpleGradient};
  color: ${props => props.theme.white};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 1em;
  border: none;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  ${buttonCSS}
`;

const StyledAButton = styled.a`
  ${buttonCSS}
`;

export default StyledButton;
export { StyledAButton };
