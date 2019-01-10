import styled from './styled-components';
import media from './media';

const StyledFooter = styled.footer`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.deepPurple};
  color: ${props => props.theme.lightestGrey};
  padding: ${props => props.theme.spc * 4}px ${props => props.theme.spc * 2}px;

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .cta {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: ${props => props.theme.spc * 2}px;
  }

  .cta-text h3, .cta-text p {
    margin: 0;
    line-height: 1.5;
  }

  .cta-text a {
    text-decoration: none;
  }

  .small-print {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => props.theme.notWhite};
  }

  ${media.mobile`
    .sign-up {
      display: none;
    }
    .cta-text a {
      text-decoration: underline;
    }
  `}

  a {
    color: ${props => props.theme.notWhite};
  }
`;

export default StyledFooter;
