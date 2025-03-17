import { type ReactNode, useCallback, useState } from 'react'
import { DietContext } from './context'

import { _mockMeals } from '@/_mock/_meals'

export function DietContextProvider({ children }: { children: ReactNode }) {
  const [meals] = useState([..._mockMeals])

  const addMeal = useCallback(() => {}, [])

  const getMeal = useCallback(
    (mealId: string) => {
      return meals.find(meal => meal.id === mealId) || null
    },
    [meals]
  )

  const removeMeal = useCallback((mealId: string) => {
    console.log(mealId)
  }, [])

  const updateMeal = useCallback((mealId: string) => {
    console.log(mealId)
  }, [])

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
