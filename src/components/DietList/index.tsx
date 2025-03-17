import { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'

import {
  DietListContainer,
  DietListLinearGradient,
  DietSectionList,
} from './styles'
import { _mockMeals, type MealDTO } from '@/_mock/_meals'

import { DietListItem } from './DietListItem'
import { DietListSectionHeader } from './DietListSectionHeader'

export type DietSection = {
  title: string
  data: MealDTO[]
}

// ---------------------------------------------------------------

export function DietList() {
  const [meals] = useState(_mockMeals)

  const sections = useMemo(() => {
    const dates = [...new Set(meals.map(meal => meal.date))]

    return dates.reduce((acc, date) => {
      const data = meals.filter(meal => meal.date === date)

      acc.push({
        title: format(new Date(date), 'dd.MM.yy'),
        data: data,
      })

      return acc
    }, [] as DietSection[])
  }, [meals])

  const navigation = useNavigation()

  function handleShowMeal(mealId: string) {
    navigation.navigate('detailMeal', { mealId })
  }

  return (
    <DietListContainer>
      <DietSectionList
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item, index) => `${(item as MealDTO).id}-${index}`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        renderItem={props => {
          const meal = props.item as MealDTO
          return (
            <DietListItem onPress={() => handleShowMeal(meal.id)} data={meal} />
          )
        }}
        renderSectionHeader={({ section }) => {
          const dietSection = section as unknown as DietSection
          return <DietListSectionHeader title={dietSection.title} />
        }}
      />

      <DietListLinearGradient />
    </DietListContainer>
  )
}
