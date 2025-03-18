import { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import {
  ArrowIcon,
  DietPercentageCardContainer,
  Description,
  Percentage,
  IconButton,
} from './styles'

import { useDietContext } from '@/context/hooks/useDietContext'
import { fDecimal } from '@/utils/fDecimal'

export function DietPercentageCard() {
  const theme = useTheme()

  const { meals } = useDietContext()

  const percentage = useMemo(() => {
    const mealsCount = meals.length
    const mealsInDietCount = meals.filter(meal => meal.belongsToDiet).length

    return mealsCount > 0 ? (mealsInDietCount * 100) / mealsCount : 0
  }, [meals])

  const navigation = useNavigation()

  const isLess = percentage < 50

  function handleShowStats() {
    navigation.navigate('stats')
  }

  if (meals.length === 0) return null

  return (
    <DietPercentageCardContainer isLess={isLess}>
      <IconButton onPress={handleShowStats}>
        <ArrowIcon
          color={isLess ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK}
        />
      </IconButton>

      <Percentage variant="h1">{fDecimal(percentage)}%</Percentage>

      <Description variant="body2" color="GRAY_200">
        das refeições dentro da dieta
      </Description>
    </DietPercentageCardContainer>
  )
}
