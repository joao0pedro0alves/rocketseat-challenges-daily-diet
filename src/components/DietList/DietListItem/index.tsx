import type { MealDTO } from '@/_mock/_meals'
import { DietListItemContainer, Title, Circle, Divider } from './styles'
import { Typography } from '@/components/ui/Typography'

interface DietListItemProps {
  data: MealDTO
}

export function DietListItem({ data }: DietListItemProps) {
  return (
    <DietListItemContainer>
      <Typography variant="caption">{data.time}</Typography>

      <Divider />

      <Title color="GRAY_200">{data.name}</Title>

      <Circle isSucess={data.belongsToDiet} />
    </DietListItemContainer>
  )
}
