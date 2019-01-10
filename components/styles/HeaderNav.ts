import styled from './styled-components';
import media from './media';

const HeaderNav = styled.nav`
  display: flex;

  li {
    list-style: none;
  }
  ${media.tablet`
    flex-direction: column
    ul {
      padding: 0;
      margin: 0;
    }
  `}
`;

export default HeaderNav;
