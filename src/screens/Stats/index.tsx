import { DietPercentageHeader } from '@/components/DietPercentageHeader'
import {
  Content,
  StatsCard,
  StatsCardSubtitle,
  StatsContainer,
  Title,
} from './styles'
import { useTheme } from 'styled-components'
import { Typography } from '@/components/ui/Typography'
import { View } from 'react-native'

export function Stats() {
  const theme = useTheme()

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
          <Typography variant="h3">22</Typography>

          <StatsCardSubtitle color="GRAY_200" variant="body2">
            melhor sequência de pratos dentro da dieta
          </StatsCardSubtitle>
        </StatsCard>

        <StatsCard>
          <Typography variant="h3">109</Typography>

          <StatsCardSubtitle color="GRAY_200" variant="body2">
            melhor sequência de pratos dentro da dieta
          </StatsCardSubtitle>
        </StatsCard>

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <StatsCard variant="green">
            <Typography variant="h3">99</Typography>

            <StatsCardSubtitle color="GRAY_200" variant="body2">
              refeições dentro da dieta
            </StatsCardSubtitle>
          </StatsCard>

          <StatsCard variant="red">
            <Typography variant="h3">10</Typography>

            <StatsCardSubtitle color="GRAY_200" variant="body2">
              refeições fora da dieta
            </StatsCardSubtitle>
          </StatsCard>
        </View>
      </Content>
    </StatsContainer>
  )
}
