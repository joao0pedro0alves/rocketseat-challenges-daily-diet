import styled, { css } from 'styled-components/native'

export type SelectVariants = 'PRIMARY' | 'SECONDARY'

type SelectContainerProps = {
  variant: SelectVariants
  isSelected: boolean
}

type CircleProps = {
  variant: SelectVariants
}

export const SelectContainer = styled.TouchableOpacity<SelectContainerProps>`
  min-height: 50px;
  max-height: 50px;
  width: 100%;

  flex: 1;
  gap: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

   ${({ theme, variant, isSelected }) => {
     if (isSelected) {
       return css`
        background-color: ${variant === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
        border-width: 1px;
        border-style: solid;
        border-color: ${variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
      `
     }

     return css`
        background-color: ${theme.COLORS.GRAY_600};
     `
   }}
`

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Circle = styled.View<CircleProps>`
  height: 8px;
  width: 8px;
  border-radius: 99px;

  background-color: ${({ variant, theme }) => (variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)};
`
