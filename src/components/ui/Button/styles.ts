import styled, { css } from 'styled-components/native'

export type ButtonVariants = 'FILLED' | 'OUTLINED'

type ButtonContainerProps = {
  variant: ButtonVariants
  isPressed: boolean
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  min-height: 50px;
  max-height: 50px;
  width: 100%;

  flex: 1;
  gap: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

   ${({ theme, variant, isPressed }) => {
     if (variant === 'OUTLINED') {
       return css`
        border: 1px solid;
        border-color: ${theme.COLORS.GRAY_100};
        background-color: ${isPressed ? theme.COLORS.GRAY_500 : 'transparent'};
       `
     }

     return css`
      background-color: ${isPressed ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_200};
     `
   }}
`

type ButtonTitleProps = {
  variant: ButtonVariants
}

export const ButtonTitle = styled.Text<ButtonTitleProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'OUTLINED' ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
