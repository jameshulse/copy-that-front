export interface ITheme {
  // spacing
  maxWidth: number,
  spc: number,
  // colors
  black: '#000',
  notBlack: string,
  white: '#fff',
  notWhite: string,
  primaryPurple: string,
  deepPurple: string,
  purpleGradient: string,
  lightestGrey: string,
  // typography
  systemFontStack: string,
  // shadows
  standardShadow: string,
  darkerShadow: string,
  purpleShadow: string,
}

const theme: ITheme = {
  // spacing
  maxWidth: 720,
  spc: 8, // the grid size
  // colors
  black: '#000',
  notBlack: '#2B2B2B',
  white: '#fff',
  notWhite: '#F5F5FC',
  lightestGrey: '#f7fcff',
  primaryPurple: '#555bcf',
  deepPurple: '#0a0d3b',
  purpleGradient: 'linear-gradient(-180deg, #5860cc 0%, #282ea1 100%)',
  // typography
  systemFontStack: '-apple-system, blinkmacsystemfont, "segoe ui", roboto, helvetica, arial, sans-serif, "apple color emoji", "segoe ui emoji", "segoe ui symbol"',
  // shadows
  standardShadow: '0 5px 15px 6px rgba(0, 0, 0, 0), 0 15px 35px 0 rgba(0, 0, 0, 0.25)',
  darkerShadow: '0 5px 15px 6px rgba(0, 0, 0, 0.1), 0 15px 35px 0 rgba(0, 0, 0, 0.25)',
  purpleShadow: '0 5px 15px 6px rgba(0, 0, 0, 0.1), 0 15px 35px 0 var(--primary-purple)',
}

export default theme;

// TODO add material heights and shadows
//  --not-white-but-purple: #9295ca;
