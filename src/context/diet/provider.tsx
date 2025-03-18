import { type ReactNode, useCallback, useState, useEffect } from 'react'
import { DietContext } from './context'
import type { MealDTO } from './MealDTO'

import { uniqueId } from '@/utils/uniqueId'
import { parseDate } from '@/utils/parseDate'

import { setMeals as setStorageMeals } from '@/storage/meal/setMeals'
import { getMeals as getStorageMeals } from '@/storage/meal/getMeals'

export function DietContextProvider({ children }: { children: ReactNode }) {
  const [meals, setMeals] = useState<MealDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    async function initializeMeals() {
      try {
        const storagedMeals = await getStorageMeals()
        setMeals(storagedMeals)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    initializeMeals()
  }, [])

  useEffect(() => {
    async function updateStorageMeals() {
      try {
        await setStorageMeals(meals)
      } catch (error) {
        console.log(error)
      }
    }

    updateStorageMeals()
  }, [meals])

  return (
    <DietContext.Provider
      value={{
        meals,
        isLoading,
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
