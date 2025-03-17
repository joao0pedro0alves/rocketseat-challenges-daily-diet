import styled from 'styled-components/native'

export const NewMealContainer = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: -16px;
  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`
