import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* margin-bottom: 36px; */
  margin-bottom: 30px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`

export const DietListHeader = styled.View`
  /* margin-top: 36px; */
  margin-top: 30px;
`

export const DietListHeaderTitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`
