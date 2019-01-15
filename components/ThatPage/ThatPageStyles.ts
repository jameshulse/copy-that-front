import styled from '../styles/styled-components';

const ThatPageStyles = styled.div`
  max-width: ${props => props.theme.maxWidth}px;
  margin: 0 auto;
  box-shadow: ${props => props.theme.standardShadow};
  padding: 64px;
  border-radius: 32px;
  img {
    width: 100%;
  }
  .difficulty {
    font-size: 12px;
    font-weight: 600;
  }
`;

export default ThatPageStyles;
