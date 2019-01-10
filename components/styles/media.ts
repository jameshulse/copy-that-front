import { css } from './styled-components';
import { ThemedCssFunction } from 'styled-components';

interface ISizes {
  desktop: number,
  tablet: number,
  mobile: number,
}

const sizes: ISizes = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
};

type Media = {
  [P in keyof ISizes]: ThemedCssFunction<any>;
}

/**
 * Produces media queries to be used in styled-components
 *
 * e.g.:
 * 
 * const ResponsiveDiv = styled.div`
 *   color: #000;
 *   ${media.mobile`flex-wrap: wrap;`}
 * `;
 *
 */
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${
        // @ts-ignore
        args.length >= 1 && css(...args)
      }
    }
  `
  return acc
}, {}) as Media;

export default media;
