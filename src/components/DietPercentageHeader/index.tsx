import {
  ArrowIcon,
  DietPercentageCardContainer,
  Description,
  Percentage,
} from './styles'

export function DietPercentageHeader() {
  return (
    <DietPercentageCardContainer>
      <ArrowIcon />

      <Percentage variant="h1">90,86%</Percentage>

      <Description variant="body2" color="GRAY_200">
        das refeições dentro da dieta
      </Description>
    </DietPercentageCardContainer>
  )
}
