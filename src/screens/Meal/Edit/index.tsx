import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { MealForm } from '@/components/MealForm'
import { Content, EditMealContainer } from './styles'

export function EditMeal() {
  const navigation = useNavigation()

  async function handleSave() {
    // #...
    navigation.navigate('feedback', { inDiet: false })
  }

  return (
    <EditMealContainer>
      <Header title="Editar refeição" />

      <Content>
        <MealForm mode="edit" onSubmit={handleSave} />
      </Content>
    </EditMealContainer>
  )
}
