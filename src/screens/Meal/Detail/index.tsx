import { useMemo } from 'react'
import { Alert, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { format, parseISO } from 'date-fns'

import { Header } from '@/components/Header'
import { Typography } from '@/components/ui/Typography'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { useDietContext } from '@/context/hooks/useDietContext'

import { Content, DetailMealContainer, Highlight } from './styles'

type RouteParams = {
  mealId: string
}

export function DetailMeal() {
  const navigation = useNavigation()

  const route = useRoute()

  const { mealId } = route.params as RouteParams

  const { getMeal, removeMeal } = useDietContext()

  const meal = useMemo(() => {
    return getMeal(mealId)
  }, [getMeal, mealId])

  function handleEditMeal() {
    navigation.navigate('editMeal', { mealId })
  }

  function handleRemoveMeal() {
    // Todo: desenvolver componente de confirmação
    Alert.alert('Remover', 'Tem certeza que deseja remover a refeição?', [
      {
        text: 'Sim',
        onPress: () => {
          navigation.navigate('home')

          removeMeal(mealId)
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <DetailMealContainer>
      <Header
        variant={meal?.belongsToDiet ? 'green' : 'red'}
        title="Refeição"
      />

      <Content>
        <Highlight>
          <Typography variant="h2">{meal?.name}</Typography>

          <Typography variant="body1" color="GRAY_200">
            {meal?.description}
          </Typography>
        </Highlight>

        <Highlight>
          <Typography variant="h4">Data e hora</Typography>

          <Typography variant="body1" color="GRAY_200">
            {meal?.date ? format(parseISO(meal.date), 'dd/MM/yyyy') : '...'} às{' '}
            {meal?.time}
          </Typography>
        </Highlight>

        {meal?.belongsToDiet ? (
          <Chip title="dentro da dieta" />
        ) : (
          <Chip variant="SECONDARY" title="fora da dieta" />
        )}

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
