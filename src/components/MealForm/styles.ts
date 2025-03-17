import styled from 'styled-components/native'
import { Typography } from '../ui/Typography'

export const MealFormContainer = styled.ScrollView`
`

export const FormContainer = styled.View`
  margin-top: 16px;

  width: 100%;
  flex: 1;
  gap: 24px;
`

export const DateContainer = styled.View`
  flex-direction: row;
  gap: 8px;

  width: 100%;
`

export const SelectContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const ErrorMessage = styled(Typography).attrs(() => ({
  variant: 'caption',
  color: 'RED_MID',
}))``
