import { View } from 'react-native'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import { Header } from '@/components/Header'
import { Typography } from '@/components/ui/Typography'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

import { Content, DetailMealContainer, Highlight } from './styles'

export function DetailMeal() {
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
          <Button icon={PencilSimpleLine} title="Editar refeição" />

          <Button icon={Trash} variant="OUTLINED" title="Excluir refeição" />
        </View>
      </Content>
    </DetailMealContainer>
  )
}
