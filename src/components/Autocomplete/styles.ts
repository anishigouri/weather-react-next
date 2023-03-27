import { styled } from '@/styles'

export const AutocompleteContainerStyled = styled('div', {
  width: '100%',
  position: 'relative',

  label: {
    color: '$text',
  },

  input: {
    width: '100%',
    border: '2px solid transparent',
    height: '3rem',
    background: '$backgroundComponent',
    borderRadius: 4,
    outline: 'none',
    fontSize: '$lg',
    padding: '1rem',

    transition: '0.2s',
    '&:focus': {
      border: '2px solid $blue300',
    },
  },

  '&:focus-within': {
    ul: {
      opacity: 1,
      height: 'auto',
    },
  },
})

export const AutocompleteIconStyled = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  fontSize: '$xl',
  color: '$text',
  margin: '0.7rem 1rem',
})

export const AutocompleteListStyled = styled('ul', {
  position: 'static',
  top: '2.5rem',
  fontSize: '$xl',
  color: '$text',
  margin: '0.2rem 0',
  width: '100%',
  background: '$backgroundComponent',
  overflowX: 'hidden',
  overflowY: 'auto',
  borderEndEndRadius: 4,

  transition: 'opacity 1s ease-out',
  opacity: 0,
  maxHeight: '500px',

  variants: {
    show: {
      true: {
        height: 'auto',
      },
      false: {
        height: 0,
      },
    },
  },

  li: {
    listStyleType: 'none',
    cursor: 'pointer',
    padding: '0.8rem',
    fontSize: '$lg',

    transition: '0.2s',

    '&:hover': {
      background: '$primary600',
      color: '$text',
    },
  },
})
