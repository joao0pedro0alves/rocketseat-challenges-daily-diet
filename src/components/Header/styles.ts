import styled from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { Typography } from '../ui/Typography'

export const HeaderContainer = styled.View`
  padding: 24px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  height: 132px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const Title = styled(Typography)`
  text-align: center;
  flex: 1;
`

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
`
