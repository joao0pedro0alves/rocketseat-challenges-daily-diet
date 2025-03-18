import styled from 'styled-components/native'
// import { SafeAreaView } from 'react-native-safe-area-context'

import { Typography } from '@/components/ui/Typography'
import { View } from 'react-native'

type StatsStyleProps = {
  variant?: 'green' | 'red'
}

export const StatsContainer = styled(View)<StatsStyleProps>`
  flex:1;
`

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -16px;
  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  gap: 12px;
`

export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;
`

export const StatsCard = styled.View<StatsStyleProps>`
  background-color: ${({ theme, variant }) => {
    if (variant === 'green') {
      return theme.COLORS.GREEN_LIGHT
    }

    if (variant === 'red') {
      return theme.COLORS.RED_LIGHT
    }

    return theme.COLORS.GRAY_600
  }};

  padding: 16px;
  border-radius: 8px;

  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 8px;

  max-height: 106px;
`

export const StatsCardSubtitle = styled(Typography)`
  text-align: center;
`
