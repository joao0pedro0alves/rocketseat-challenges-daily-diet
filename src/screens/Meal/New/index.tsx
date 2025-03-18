import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { MealForm, type MealFormData } from '@/components/MealForm'
import { Content, NewMealContainer } from './styles'
import { useDietContext } from '@/context/hooks/useDietContext'

export function NewMeal() {
  const navigation = useNavigation()

  const { addMeal } = useDietContext()

  async function handleSave(data: MealFormData) {
    addMeal({
      name: data.name,
      description: data.description,
      date: data.date,
      time: data.time,
      belongsToDiet: data.belongsToDiet,
    })

    navigation.navigate('feedback', { inDiet: data.belongsToDiet })
  }

  return (
    <NewMealContainer>
      <Header title="Nova refeição" />

      <Content>
        <MealForm onSubmit={handleSave} />
      </Content>
    </NewMealContainer>
  )
}
