import { Content, NewMealContainer } from './styles'
import { Header } from '@/components/Header'
import { MealForm } from '@/components/MealForm'

export function NewMeal() {
  return (
    <NewMealContainer>
      <Header title="Nova refeição" />

      <Content>
        <MealForm />
      </Content>
    </NewMealContainer>
  )
}
