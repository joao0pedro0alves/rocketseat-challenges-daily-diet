import { DietListSectionHeaderContainer, Title } from './styles'

interface DietListSectionHeaderProps {
  title: string
}

export function DietListSectionHeader({ title }: DietListSectionHeaderProps) {
  return (
    <DietListSectionHeaderContainer>
      <Title>{title}</Title>
    </DietListSectionHeaderContainer>
  )
}
