import { Typography } from '@/components/ui/Typography'
import { DietListSectionHeaderContainer } from './styles'

interface DietListSectionHeaderProps {
  title: string
}

export function DietListSectionHeader({ title }: DietListSectionHeaderProps) {
  return (
    <DietListSectionHeaderContainer>
      <Typography variant="h3">{title}</Typography>
    </DietListSectionHeaderContainer>
  )
}
