import { useState } from 'react'
import type { StyleProp, TextInputProps, ViewStyle } from 'react-native'
import { useTheme } from 'styled-components/native'

import { InputContainer, Label, StyledTextInput } from './styles'

export interface InputProps extends TextInputProps {
  label: string
  inputStyle?: StyleProp<ViewStyle>
}

export function Input({ label, style, inputStyle, ...rest }: InputProps) {
  const theme = useTheme()

  const [isActive, setIsActive] = useState(false)

  function handleFocus() {
    setIsActive(true)
  }

  function handleBlur() {
    setIsActive(false)
  }

  return (
    <InputContainer style={style}>
      <Label color="GRAY_200" variant="h4">
        {label}
      </Label>

      <StyledTextInput
        placeholderTextColor={theme.COLORS.GRAY_400}
        isActive={isActive}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputStyle}
        {...rest}
      />
    </InputContainer>
  )
}
