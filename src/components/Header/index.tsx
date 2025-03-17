import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from 'styled-components/native'

import {
  ArrowIcon,
  HeaderContainer,
  Title,
  headerVariants,
  type HeaderVariants,
} from './styles'

interface HeaderProps {
  title: string
  variant?: HeaderVariants
}

export function Header({ title, variant = 'default' }: HeaderProps) {
  const theme = useTheme()

  const variants = headerVariants(theme)

  return (
    <HeaderContainer variant={variant}>
      <StatusBar backgroundColor={variants[variant]} />

      <ArrowIcon />

      <Title variant="h3">{title}</Title>

      <View style={{ width: 24 }} />
    </HeaderContainer>
  )
}
