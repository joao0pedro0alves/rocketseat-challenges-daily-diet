import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  gap: 16px;
  padding: 24px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`
