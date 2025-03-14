import styled, { css } from 'styled-components/native'

export const DietListSectionHeaderContainer = styled.View`
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
