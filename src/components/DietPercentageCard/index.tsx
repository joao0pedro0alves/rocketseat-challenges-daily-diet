import { useNavigation } from '@react-navigation/native'
import {
  ArrowIcon,
  DietPercentageCardContainer,
  Description,
  Percentage,
  IconButton,
} from './styles'

export function DietPercentageCard() {
  const navigation = useNavigation()

  function handleShowStats() {
    navigation.navigate('stats')
  }

  return (
    <DietPercentageCardContainer>
      <IconButton onPress={handleShowStats}>
        <ArrowIcon />
      </IconButton>

      <Percentage variant="h1">90,86%</Percentage>

      <Description variant="body2" color="GRAY_200">
        das refeições dentro da dieta
      </Description>
    </DietPercentageCardContainer>
  )
}
