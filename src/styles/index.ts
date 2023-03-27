import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray100: '#E1E1E6',
      gray300: '#C4C4CC',
      gray400: '#8D8D99',
      gray500: '#7C7C8A',
      gray600: '#323238',
      gray700: '#29292E',
      gray800: '#202024',
      gray900: '#121214',

      primary200: '#42a5f5',
      primary300: '#1e88e5',
      primary600: '#2979ff',

      text: '$gray100',
      background: '$gray900',
      backgroundComponent: '$gray600',
      secondary: '#E8F0FE',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    xs: '(max-width: 575px)',
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(min-width: 1140px)',
  },
})

export const lightTheme = createTheme({
  colors: {
    text: '$gray800',
    background: '$gray100',
    backgroundComponent: '$gray300',
    primary200: '#42a5f5',
    primary300: '#1e88e5',
    primary600: '#2979ff',
    secondary: '#E8F0FE',
  },
})
