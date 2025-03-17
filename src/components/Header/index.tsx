import { View } from 'react-native'

import {
  ArrowIcon,
  HeaderContainer,
  IconButton,
  Title,
  type HeaderVariants,
} from './styles'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  title: string
  variant?: HeaderVariants
}

export function Header({ title, variant = 'default' }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HeaderContainer variant={variant}>
      <IconButton onPress={handleGoBack}>
        <ArrowIcon />
      </IconButton>

      <Title variant="h3">{title}</Title>

      <View style={{ width: 24 }} />
    </HeaderContainer>
  )
}
