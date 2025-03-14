import styled, { css } from 'styled-components/native'

interface StyledTextInputProps {
  isActive: boolean
}

export const InputContainer = styled.View`
  width: 100%;
`

export const Label = styled.Text`
  margin-bottom: 4px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  width: 100%;
  max-height: 48px;

  border-radius: 6px;
  padding-left: 12px;

  ${({ theme, isActive }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    border: 1px solid ${isActive ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
  `}

`
