import Link from 'next/link'; 
import StyledHeader from './styles/StyledHeader';
import HeaderNav from './styles/HeaderNav'

export default () =>
  <StyledHeader>
    <Link prefetch href='/'>
      <a>
        <h1>Copy That</h1>
      </a>
    </Link>
    <HeaderNav>
      <ul>
        <Link prefetch href='/blog'>
          <li>
            <h4>Blog</h4>
          </li>
        </Link>
      </ul>
      <ul>
        <Link prefetch href='/about'>
  <li>
    <h4>About</h4>
  </li>
        </Link>
      </ul>
      <ul>
        <Link prefetch href='/newsletter'>
          <li><h4>Newsletter</h4></li>
        </Link>
      </ul>
    </HeaderNav>
  </StyledHeader>;
