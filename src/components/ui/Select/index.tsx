import type { TouchableOpacityProps } from 'react-native'
import { SelectContainer, type SelectVariants, Circle } from './styles'
import { Typography } from '../Typography'

interface SelectProps extends TouchableOpacityProps {
  title: string
  variant?: SelectVariants
  selected?: boolean
}

export function Select(props: SelectProps) {
  const { title, variant = 'PRIMARY', selected = false, ...rest } = props

  return (
    <SelectContainer
      activeOpacity={1}
      isSelected={selected}
      variant={variant}
      {...rest}
    >
      <Circle variant={variant} />

      <Typography variant="h4">{title}</Typography>
    </SelectContainer>
  )
}
