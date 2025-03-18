import { createContext } from 'react'
import type { MealDTO } from './MealDTO'

interface DietContextData {
  meals: MealDTO[]
  isLoading: boolean

  addMeal: (data: Omit<MealDTO, 'id'>) => void
  getMeal: (mealId: string) => MealDTO | null
  removeMeal: (mealId: string) => void
  updateMeal: (mealId: string, updatedData: Omit<MealDTO, 'id'>) => void
}

export const DietContext = createContext({} as DietContextData)
