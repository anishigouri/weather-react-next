import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  html: {
    overflowX: 'hidden',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$background',
    color: '$text',
    maxWidth: '74rem',
    margin: '0 auto',
    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
