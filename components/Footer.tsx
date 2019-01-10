import StyledFooter from './styles/StyledFooter';
import { StyledAButton } from './styles/StyledButton';

export default () =>
  <StyledFooter>
    <div className="container">
      <div className="cta">
        <div className="cta-text">
          <h3>Ready to get learning?</h3> 
          <p><a href="https://pages.convertkit.com/901126d022/14dd00220e">Sign up now</a> and start improving</p>
        </div>
        <StyledAButton className="sign-up" href="https://pages.convertkit.com/901126d022/14dd00220e">
          Sign up now
        </StyledAButton>
      </div>
      <div className="small-print">
        <p className="copywright">©2018 Copy That</p>
        <p>Made by <a href="https://twitter.com/mulholio">@mulholio</a></p>
      </div>
    </div>
  </StyledFooter>;
