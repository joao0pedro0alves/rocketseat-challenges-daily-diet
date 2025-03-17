import styled from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { Typography } from '../ui/Typography'

export const DietPercentageCardContainer = styled.View`
  padding: 20px 16px;
  position: relative;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

  height: 200px;
  align-items: center;
  justify-content: center;
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

  top: 36px;
  left: 24px;
`

export const ArrowIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``
