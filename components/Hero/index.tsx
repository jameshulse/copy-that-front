import React from 'react';
import Content from './HeroContent.mdx';
import HeroStyles from './HeroStyles';
import StyledCard from './StyledCard';
import StyledDivider from './StyledDivider';

const Hero = () =>
  <>
    <HeroStyles>
      <StyledCard>
        <Content/>
      </StyledCard>
    </HeroStyles>
    <StyledDivider />
  </>;

export default Hero;
