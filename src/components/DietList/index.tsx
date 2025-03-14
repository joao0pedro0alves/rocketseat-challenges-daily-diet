import { useMemo } from 'react'
import { format } from 'date-fns'

import { DietListContainer } from './styles'
import { _mockMeals, type MealDTO } from '@/_mock/_meals'

import { DietListItem } from './DietListItem'
import { DietListSectionHeader } from './DietListSectionHeader'

export type DietSection = {
  title: string
  data: MealDTO[]
}

// ---------------------------------------------------------------

export function DietList() {
  const sections = useMemo(() => {
    const dates = [...new Set(_mockMeals.map(meal => meal.date))]

    return dates.reduce((acc, date) => {
      const meals = _mockMeals.filter(meal => meal.date === date)

      acc.push({
        title: format(new Date(date), 'dd.MM.yy'),
        data: meals,
      })

      return acc
    }, [] as DietSection[])
  }, [])

  return (
    <DietListContainer
      showsVerticalScrollIndicator={false}
      sections={sections}
      keyExtractor={(item, index) => `${(item as MealDTO).id}-${index}`}
      renderItem={props => {
        const meal = props.item as MealDTO
        return <DietListItem data={meal} />
      }}
      renderSectionHeader={({ section }) => {
        const dietSection = section as unknown as DietSection
        return <DietListSectionHeader title={dietSection.title} />
      }}
    />
  )
}
