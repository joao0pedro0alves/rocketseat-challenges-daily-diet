import type { MealDTO } from '@/context/diet/MealDTO'

import { Typography } from '@/components/ui/Typography'
import { DietListItemContainer, Title, Circle, Divider } from './styles'

interface DietListItemProps {
  data: MealDTO
  onPress: () => void
}

export function DietListItem({ data, onPress }: DietListItemProps) {
  return (
    <DietListItemContainer onPress={onPress} activeOpacity={0.8}>
      <Typography variant="caption">{data.time}</Typography>

      <Divider />

      <Title color="GRAY_200">{data.name}</Title>

      <Circle isSucess={data.belongsToDiet} />
    </DietListItemContainer>
  )
}
