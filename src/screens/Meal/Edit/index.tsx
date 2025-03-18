import { useMemo } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { format } from 'date-fns'

import { Header } from '@/components/Header'
import { MealForm, type MealFormData } from '@/components/MealForm'
import { useDietContext } from '@/context/hooks/useDietContext'

import { Content, EditMealContainer } from './styles'

type RouteParams = {
  mealId: string
}

export function EditMeal() {
  const navigation = useNavigation()

  const route = useRoute()

  const { mealId } = route.params as RouteParams

  const { getMeal, updateMeal } = useDietContext()

  const meal = useMemo(() => {
    return getMeal(mealId)
  }, [getMeal, mealId])

  async function handleSave(data: MealFormData) {
    updateMeal(mealId, {
      name: data.name,
      description: data.description,
      date: data.date,
      time: data.time,
      belongsToDiet: data.belongsToDiet,
    })

    navigation.navigate('feedback', { inDiet: data.belongsToDiet })
  }

  const formInitialValues = useMemo(
    () => ({
      name: meal?.name,
      description: meal?.description,
      date: meal ? format(new Date(meal?.date), 'dd/MM/yyyy') : '',
      time: meal?.time,
      belongsToDiet: meal?.belongsToDiet,
    }),
    [meal]
  )

  return (
    <EditMealContainer>
      <Header title="Editar refeição" />

      <Content>
        <MealForm
          mode="edit"
          onSubmit={handleSave}
          initialValues={formInitialValues}
        />
      </Content>
    </EditMealContainer>
  )
}
