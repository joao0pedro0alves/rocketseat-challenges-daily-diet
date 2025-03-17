import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from 'styled-components/native'

import {
  ArrowIcon,
  HeaderContainer,
  IconButton,
  Title,
  headerVariants,
  type HeaderVariants,
} from './styles'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  title: string
  variant?: HeaderVariants
}

export function Header({ title, variant = 'default' }: HeaderProps) {
  const theme = useTheme()

  const navigation = useNavigation()

  const variants = headerVariants(theme)

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HeaderContainer variant={variant}>
      <StatusBar backgroundColor={variants[variant]} />

      <IconButton onPress={handleGoBack}>
        <ArrowIcon />
      </IconButton>

      <Title variant="h3">{title}</Title>

      <View style={{ width: 24 }} />
    </HeaderContainer>
  )
}
