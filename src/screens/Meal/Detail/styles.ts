import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const DetailMealContainer = styled(SafeAreaView)`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -16px;
  gap: 24px;
  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Highlight = styled.View`
  gap: 8px;
`
