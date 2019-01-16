import styled from '../styles/styled-components';

const HeroStyles = styled.div`
  padding: 64px;
  z-index: 1;
  background-image: linear-gradient(#fff, rgba(250, 250, 252, 0.7)), url('static/images/c.svg'), linear-gradient(#fff, #fafafc);
  && > * {
    z-index: 100;
  }
`;

export default HeroStyles;
