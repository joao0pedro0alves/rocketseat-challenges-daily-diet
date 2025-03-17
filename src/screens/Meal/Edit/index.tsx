import { Content, EditMealContainer } from './styles'
import { Header } from '@/components/Header'
import { MealForm } from '@/components/MealForm'

export function EditMeal() {
  return (
    <EditMealContainer>
      <Header title="Editar refeição" />

      <Content>
        <MealForm mode="edit" />
      </Content>
    </EditMealContainer>
  )
}
