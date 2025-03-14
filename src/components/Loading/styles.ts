import { ActivityIndicator, View } from 'react-native'
import styled from 'styled-components/native'

export const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const StyledActivityIndicator = styled(ActivityIndicator).attrs(
  ({ theme }) => ({
    size: 40,
    color: theme.COLORS.GREEN_DARK,
  })
)``
