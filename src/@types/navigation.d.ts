export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      stats: undefined
      newMeal: undefined
      editMeal: {
        mealId: string
      }
      detailMeal: {
        mealId: string
      }
      feedback: {
        inDiet: boolean
      }
    }
  }
}
