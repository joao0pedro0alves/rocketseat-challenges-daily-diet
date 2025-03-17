import { Alert, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import { Header } from '@/components/Header'
import { Typography } from '@/components/ui/Typography'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

import { Content, DetailMealContainer, Highlight } from './styles'

export function DetailMeal() {
  const navigation = useNavigation()

  function handleEditMeal() {
    navigation.navigate('editMeal', { mealId: '1' })
  }

  function handleRemoveMeal() {
    // Todo: desenvolver componente de confirmação
    Alert.alert('Remover', 'Tem certeza que deseja remover a refeição?', [
      {
        text: 'Sim',
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <DetailMealContainer>
      <Header variant="green" title="Refeição" />

      <Content>
        <Highlight>
          <Typography variant="h2">Sanduíche</Typography>

          <Typography variant="body1" color="GRAY_200">
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Typography>
        </Highlight>

        <Highlight>
          <Typography variant="h4">Data e hora</Typography>

          <Typography variant="body1" color="GRAY_200">
            12/08/2022 às 16:00
          </Typography>
        </Highlight>

        <Chip title="dentro da dieta" />

        <View style={{ flex: 1, justifyContent: 'flex-end', gap: 8 }}>
          <Button
            onPress={handleEditMeal}
            icon={PencilSimpleLine}
            title="Editar refeição"
          />

          <Button
            onPress={handleRemoveMeal}
            icon={Trash}
            variant="OUTLINED"
            title="Excluir refeição"
          />
        </View>
      </Content>
    </DetailMealContainer>
  )
}
