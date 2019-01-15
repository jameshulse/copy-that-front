import styled from '../styles/styled-components';

const ThatCardStyles = styled.div`
  box-shadow: ${props => props.theme.standardShadow};
  max-width: 256px;
  border-radius: 16px;
  padding: 16px;
  a {
    text-decoration: none;
    color: ${props => props.theme.notBlack};
  }

  h4 {
    font-weight: 600;
    line-height: 1.25;
  }
  h4, p {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
`;

export default ThatCardStyles;
