import styled from './styled-components';
import media from './media';

const StyledHeader = styled.header`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.purpleGradient};
  color: ${props => props.theme.notWhite};
  padding: ${props => props.theme.spc}px ${props => props.theme.spc * 2}px;
  box-shadow: ${props => props.theme.standardShadow};
  flex-wrap: wrap;
  ${media.tablet`
    flex-direction: column;
    text-align: center;
  `}

  h1, h4 {
    margin: 0;
  }

  a {
    color: ${props => props.theme.notWhite};
    text-decoration: none;
  }
`;

export default StyledHeader;
