import { useMemo } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components'
import { useDietContext } from '@/context/hooks/useDietContext'

import { DietPercentageHeader } from '@/components/DietPercentageHeader'
import { Typography } from '@/components/ui/Typography'
import {
  Content,
  StatsCard,
  StatsCardSubtitle,
  StatsContainer,
  Title,
} from './styles'

export function Stats() {
  const theme = useTheme()

  const { meals } = useDietContext()

  const summary = useMemo(() => {
    return meals.reduce(
      (acc, meal) => {
        acc.mealsCount++

        if (meal.belongsToDiet) {
          acc.mealsInDietCount++
        } else {
          acc.mealsOutDietCount++
        }

        return acc
      },
      {
        bestSequence: 0,
        mealsCount: 0,
        mealsInDietCount: 0,
        mealsOutDietCount: 0,
      }
    )
  }, [meals])

  return (
    <StatsContainer>
      <DietPercentageHeader />

      <Content
        style={{
          elevation: 10,
          shadowOpacity: 0.5,
          shadowColor: theme.COLORS.GRAY_700,
        }}
      >
        <Title variant="h4">Estatísticas gerais</Title>

        <StatsCard>
          <Typography variant="h3">{summary.bestSequence}</Typography>

          <StatsCardSubtitle color="GRAY_200" variant="body2">
            melhor sequência de pratos dentro da dieta
          </StatsCardSubtitle>
        </StatsCard>

        <StatsCard>
          <Typography variant="h3">{summary.mealsCount}</Typography>

          <StatsCardSubtitle color="GRAY_200" variant="body2">
            refeições registradas
          </StatsCardSubtitle>
        </StatsCard>

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <StatsCard variant="green">
            <Typography variant="h3">{summary.mealsInDietCount}</Typography>

            <StatsCardSubtitle color="GRAY_200" variant="body2">
              refeições dentro da dieta
            </StatsCardSubtitle>
          </StatsCard>

          <StatsCard variant="red">
            <Typography variant="h3">{summary.mealsOutDietCount}</Typography>

            <StatsCardSubtitle color="GRAY_200" variant="body2">
              refeições fora da dieta
            </StatsCardSubtitle>
          </StatsCard>
        </View>
      </Content>
    </StatsContainer>
  )
}
