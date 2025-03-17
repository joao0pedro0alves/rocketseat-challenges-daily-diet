import { View } from 'react-native'
import { ArrowIcon, HeaderContainer, Title } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <ArrowIcon />

      <Title variant="h3">{title}</Title>

      <View style={{ width: 24 }} />
    </HeaderContainer>
  )
}
