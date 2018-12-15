import styled from './styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.purpleGradient};
  color: ${props => props.theme.notWhite};
  padding: ${props => props.theme.spc}px ${props => props.theme.spc * 2}px;
  box-shadow: ${props => props.theme.standardShadow};

  h1 {
    margin: 0;
  }

  a {
    color: ${props => props.theme.notWhite};
    text-decoration: none;
  }
`;

export default StyledHeader;
