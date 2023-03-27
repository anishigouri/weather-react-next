import { FaSpinner } from 'react-icons/fa'
import { LoadingStyled } from './styles'

interface ILoadingProps {
  color?: string
  size?: number
}

export function Loading({ color = '$primary200', size = 50 }: ILoadingProps) {
  return (
    <LoadingStyled
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity }}
      initial={{ rotate: 0 }}
      color={color}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <FaSpinner size={size} />
    </LoadingStyled>
  )
}
