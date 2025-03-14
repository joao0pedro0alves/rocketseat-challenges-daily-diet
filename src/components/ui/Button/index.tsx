import type { TouchableOpacityProps } from 'react-native'
import type { Icon } from 'phosphor-react-native'

import { ButtonContainer, ButtonTitle, type ButtonVariants } from './styles'
import { useTheme } from 'styled-components'
import { useState } from 'react'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  icon?: Icon
  variant?: ButtonVariants
}

export function Button(props: ButtonProps) {
  const { title, icon: Icon, variant = 'FILLED', ...rest } = props

  const theme = useTheme()

  const [isPressed, setIsPressed] = useState(false)

  const isOutlinedButton = variant === 'OUTLINED'

  function handlePressIn() {
    setIsPressed(true)
  }

  function handlePressOut() {
    setIsPressed(false)
  }

  return (
    <ButtonContainer
      activeOpacity={1}
      isPressed={isPressed}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      variant={variant}
      {...rest}
    >
      {Icon && (
        <Icon
          color={isOutlinedButton ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE}
          size={18}
        />
      )}

      <ButtonTitle variant={variant}>{title}</ButtonTitle>
    </ButtonContainer>
  )
}
