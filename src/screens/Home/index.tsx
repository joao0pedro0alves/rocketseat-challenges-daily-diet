import { Image } from 'react-native'
import { Plus } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import logoImage from '@/assets/logo.png'
import sampleAvatar from '@/assets/sample/avatar.png'

import { DietPercentageCard } from '@/components/DietPercentageCard'
import { DietList } from '@/components/DietList'
import { Button } from '@/components/ui/Button'

import {
  Avatar,
  DietListHeader,
  DietListHeaderTitle,
  Header,
  HomeContainer,
} from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleNewMeal() {
    navigation.navigate('newMeal')
  }

  return (
    <HomeContainer>
      <Header>
        <Image source={logoImage} />
        <Avatar source={sampleAvatar} />
      </Header>

      <DietPercentageCard />

      <DietListHeader>
        <DietListHeaderTitle variant="body1">Refeições</DietListHeaderTitle>

        <Button icon={Plus} title="Nova refeição" onPress={handleNewMeal} />
      </DietListHeader>

      <DietList />
    </HomeContainer>
  )
}
