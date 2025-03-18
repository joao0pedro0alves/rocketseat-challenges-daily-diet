import styled, { css } from 'styled-components/native'
import { typographyVariants } from '../Typography/styles'
import { Typography } from '../Typography'

interface StyledTextInputProps {
  isActive: boolean
}

export const InputContainer = styled.View`
  width: 100%;
`

export const Label = styled(Typography)`
  margin-bottom: 4px;
`

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  width: 100%;
  max-height: 48px;
  vertical-align: top;

  border-radius: 6px;
  padding-left: 12px;

  ${({ theme, isActive }) => css`
    color: ${theme.COLORS.GRAY_100};
    border: 1px solid ${isActive ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
    
    ${typographyVariants(theme).body1}
  `}

`
