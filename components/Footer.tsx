import Link from 'next/link'; 
import StyledFooter from './styles/StyledFooter';
import StyledAButton from './styles/StyledButton';

export default () =>
  <StyledFooter>
    <div className="container">
      <div className="cta">
        <div className="cta-text">
          <h3>Ready to get learning?</h3> 
          <p>Sign up now and start improving</p>
        </div>
        <Link href="/newsletter" prefetch>
          <StyledAButton>
            Sign up now
          </StyledAButton>
      </Link>
      </div>
      <div className="small-print">
        <p className="copywright">©2018 Copy That</p>
        <p>Made by <a href="https://twitter.com/mulholio">@mulholio</a></p>
      </div>
    </div>
  </StyledFooter>;
