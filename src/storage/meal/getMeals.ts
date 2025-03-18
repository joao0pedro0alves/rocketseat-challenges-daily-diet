import AsyncStorage from '@react-native-async-storage/async-storage'
import type { MealStorageDTO } from './MealStorageDTO'
import { MEAL_COLLECTION } from '../storageConfig'

export async function getMeals() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
  return storage ? (JSON.parse(storage) as MealStorageDTO[]) : []
}
