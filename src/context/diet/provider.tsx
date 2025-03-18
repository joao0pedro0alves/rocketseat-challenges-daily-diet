import { type ReactNode, useCallback, useState } from 'react'
import { DietContext } from './context'

import type { MealDTO } from '@/_mock/_meals'
import { uniqueId } from '@/utils/uniqueId'
import { parseDate } from '@/utils/parseDate'

export function DietContextProvider({ children }: { children: ReactNode }) {
  const [meals, setMeals] = useState<MealDTO[]>([])

  const getMeal = useCallback(
    (mealId: string) => {
      return meals.find(meal => meal.id === mealId) || null
    },
    [meals]
  )

  const addMeal = useCallback((data: Omit<MealDTO, 'id'>) => {
    const { name, description, date, time, belongsToDiet } = data

    const newMeal = {
      id: uniqueId(),
      name,
      description,
      date: parseDate(date),
      time,
      belongsToDiet,
    }

    setMeals(prevState => [...prevState, newMeal])
  }, [])

  const removeMeal = useCallback((mealId: string) => {
    setMeals(prevState => prevState.filter(meal => meal.id !== mealId))
  }, [])

  const updateMeal = useCallback(
    (mealId: string, updatedData: Omit<MealDTO, 'id'>) => {
      setMeals(prevState =>
        prevState.map(meal =>
          meal.id !== mealId
            ? meal
            : {
                ...meal,
                ...updatedData,
                date: parseDate(updatedData.date),
              }
        )
      )
    },
    []
  )

  return (
    <DietContext.Provider
      value={{
        meals,
        getMeal,
        addMeal,
        removeMeal,
        updateMeal,
      }}
    >
      {children}
    </DietContext.Provider>
  )
}
