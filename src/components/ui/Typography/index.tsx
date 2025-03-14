import type { TextProps } from 'react-native'
import { TypographyContainer, type TypographyContainerProps } from './styles'

type TypographyProps = Partial<TypographyContainerProps> & TextProps & {
}

export function Typography({ variant = 'body1', color = 'GRAY_100', ...rest }: TypographyProps) {
  return <TypographyContainer variant={variant} color={color} {...rest} />
} 
