import type { MealDTO } from '@/_mock/_meals'
import { createContext } from 'react'

interface DietContextData {
  meals: MealDTO[]

  addMeal: (data: Omit<MealDTO, 'id'>) => void
  getMeal: (mealId: string) => MealDTO | null
  removeMeal: (mealId: string) => void
  updateMeal: (mealId: string, updatedData: Omit<MealDTO, 'id'>) => void
}

export const DietContext = createContext({} as DietContextData)
