import {
  ArrowIcon,
  DietPercentageCardContainer,
  Description,
  Percentage,
} from './styles'

export function DietPercentageCard() {
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
