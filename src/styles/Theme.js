import { css } from 'styled-components';

export const flexSet = (justifyContent, alignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

const Theme = {
  fontSizeSmall: '13px',
  fontSizeMedium: '20px',
  fontSizeLarge: '40px',
  fontWeightMedium: '400',
  fontWeightBold: '600',
  primaryColor: '#D5A770',
  gray: '#474747',
  black: '#333333',
  bgColor: '#F8F8F8',
  flexSet,
};

export default Theme;
