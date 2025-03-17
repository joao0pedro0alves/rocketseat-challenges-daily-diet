import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/Header'
import { MealForm } from '@/components/MealForm'
import { Content, NewMealContainer } from './styles'

export function NewMeal() {
  const navigation = useNavigation()

  async function handleSave(data: unknown) {
    console.log(data)

    // #...
    navigation.navigate('feedback', { inDiet: true })
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
