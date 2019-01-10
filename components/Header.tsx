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
          <a>
            <li>
              <h4>Blog</h4>
            </li>
          </a>
        </Link>
      </ul>
      <ul>
      </ul>
      <ul>
        <a href='https://pages.convertkit.com/901126d022/14dd00220e'>
          <li>
            <h4>Newsletter</h4>
          </li>
        </a>
      </ul>
    </HeaderNav>
  </StyledHeader>;
