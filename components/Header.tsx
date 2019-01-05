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
          <li>Blog</li>
        </Link>
      </ul>
      <ul>
        <Link prefetch href='/about'>
          <li>About</li>
        </Link>
      </ul>
      <ul>
        <Link prefetch href='/newsletter'>
          <li>Newsletter</li>
        </Link>
      </ul>
    </HeaderNav>
  </StyledHeader>;
