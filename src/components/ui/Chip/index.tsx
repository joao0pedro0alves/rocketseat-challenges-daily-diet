import type { ViewProps } from 'react-native'
import { ChipContainer, type ChipVariants, Circle } from './styles'
import { Typography } from '../Typography'

interface ChipProps extends ViewProps {
  title: string
  variant?: ChipVariants
}

export function Chip(props: ChipProps) {
  const { title, variant = 'PRIMARY', ...rest } = props

  return (
    <ChipContainer variant={variant} {...rest}>
      <Circle variant={variant} />

      <Typography variant="body3">{title}</Typography>
    </ChipContainer>
  )
}
