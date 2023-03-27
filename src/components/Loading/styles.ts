import { styled } from '@/styles'
import { motion } from 'framer-motion'

interface ILoadingPropsStyled {
  color?: string
}

export const LoadingStyled = styled(
  motion.div,
  {
    color: '$primary200',
  },
  ({ color }: ILoadingPropsStyled) => ({
    color,
  }),
)
