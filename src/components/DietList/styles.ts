import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native'

export const DietListContainer = styled.View`
  width: 100%;
  flex: 1;

  position: relative;
`

export const DietSectionList = styled.SectionList`
  flex: 1;
  margin-top: 72px;
  z-index: 1;
`

export const DietListLinearGradient = styled(LinearGradient).attrs(() => ({
  colors: ['transparent', 'rgba(250, 250, 250, 1)'],
}))`
  width: ${Dimensions.get('screen').width}px;
  height: 160px;

  position: absolute;
  z-index: 10;
  bottom: -16px;
  left: -24px;
`
