import { useMemo } from 'react'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { useDietContext } from '@/context/hooks/useDietContext'

import {
  ArrowIcon,
  DietPercentageCardContainer,
  Description,
  Percentage,
  IconButton,
} from './styles'
import { fDecimal } from '@/utils/fDecimal'
import { headerVariants } from '../Header/styles'

export function DietPercentageHeader() {
  const theme = useTheme()

  const navigation = useNavigation()

  const { meals } = useDietContext()

  const percentage = useMemo(() => {
    const mealsCount = meals.length
    const mealsInDietCount = meals.filter(meal => meal.belongsToDiet).length

    return (mealsInDietCount * 100) / mealsCount
  }, [meals])

  const isLess = percentage < 50

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <DietPercentageCardContainer isLess={isLess}>
      <IconButton onPress={handleGoBack}>
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
