import { Typography } from '@/components/ui/Typography'
import styled from 'styled-components/native'

export const DietListItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 12px;

  margin-bottom: 8px;
  padding: 14px 12px 16px;
  
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`

export const Divider = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: 100%;
  width: 1px;
`

export const Title = styled(Typography)`
  flex: 1;
`

type CircleProps = {
  isSucess: boolean
}

export const Circle = styled.View<CircleProps>`
  height: 14px;
  width: 14px;

  border-radius: 999px;
  background-color: ${({ theme, isSucess }) => (isSucess ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID)};
`
