import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'

export const DietPercentageCardContainer = styled.View`
  padding: 20px 16px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
`

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XLL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  align-self: flex-end;
  position: absolute;

  top: 20px;
  right: 16px;
`
