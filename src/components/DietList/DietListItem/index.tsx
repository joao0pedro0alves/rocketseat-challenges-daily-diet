import type { MealDTO } from '@/_mock/_meals'
import { DietListItemContainer, Time, Title, Circle, Divider } from './styles'

interface DietListItemProps {
  data: MealDTO
}

export function DietListItem({ data }: DietListItemProps) {
  return (
    <DietListItemContainer>
      <Time>{data.time}</Time>

      <Divider />

      <Title>{data.name}</Title>

      <Circle isSucess={data.belongsToDiet} />
    </DietListItemContainer>
  )
}
