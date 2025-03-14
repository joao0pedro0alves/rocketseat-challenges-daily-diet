import styled, { css } from 'styled-components/native'

export const DietListItemContainer = styled.View`
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

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
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
