import styled, { type DefaultTheme } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

import { Typography } from '../ui/Typography'

export type HeaderVariants = 'default' | 'green' | 'red'

export const headerVariants = (
  theme: DefaultTheme
): Record<HeaderVariants, string> => ({
  default: theme.COLORS.GRAY_500,
  green: theme.COLORS.GREEN_LIGHT,
  red: theme.COLORS.RED_LIGHT,
})

export const HeaderContainer = styled.View<{ variant: HeaderVariants }>`
  padding: 24px;
  border-radius: 8px;
  height: 132px;
  
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${({ theme, variant }) => headerVariants(theme)[variant]};
`

export const Title = styled(Typography)`
  text-align: center;
  flex: 1;
`

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))``
