import styled from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'
import { Typography } from '../ui/Typography'

export const DietPercentageCardContainer = styled.View`
  padding: 20px 16px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
`

export const Percentage = styled(Typography)`
  text-align: center;
`

export const Description = styled(Typography)`
  text-align: center;
`

export const IconButton = styled.TouchableOpacity`
  align-self: flex-end;
  position: absolute;

  top: 20px;
  right: 16px;
  z-index: 10;
`

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`

`
