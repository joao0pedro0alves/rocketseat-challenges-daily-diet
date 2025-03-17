import { useState } from 'react'
import type { TextInputProps } from 'react-native'

import { InputContainer, Label, StyledTextInput } from './styles'

interface InputProps extends TextInputProps {
  label: string
}

export function Input({ label, ...rest }: InputProps) {
  const [isActive, setIsActive] = useState(false)

  function handleFocus() {
    setIsActive(true)
  }

  function handleBlur() {
    setIsActive(false)
  }

  return (
    <InputContainer>
      <Label color="GRAY_200" variant="h4">
        {label}
      </Label>

      <StyledTextInput
        isActive={isActive}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </InputContainer>
  )
}
