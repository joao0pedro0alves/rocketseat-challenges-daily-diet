import AsyncStorage from '@react-native-async-storage/async-storage'
import type { MealStorageDTO } from './MealStorageDTO'
import { MEAL_COLLECTION } from '../storageConfig'

export async function setMeals(meals: MealStorageDTO[]) {
  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals))
}
