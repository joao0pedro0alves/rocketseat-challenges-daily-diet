import { PencilSimpleLine, Trash } from 'phosphor-react-native'

import { Button } from '@/components/ui/Button'
import { HomeContainer, Title } from './styles'
import { Select } from '@/components/ui/Select'
import { View } from 'react-native'
import { Input } from '@/components/ui/Input'

export function Home() {
  return (
    <HomeContainer>
      <Title>Daily Diet</Title>

      <Button title="Button filled" variant="FILLED" icon={PencilSimpleLine} />

      <Button title="Button outlined" variant="OUTLINED" icon={Trash} />

      <View style={{ width: '100%', flexDirection: 'row', gap: 8 }}>
        <Select title="Select primary" variant="PRIMARY" />
        <Select title="Select secondary" variant="SECONDARY" />
      </View>

      <View style={{ width: '100%', flexDirection: 'row', gap: 8 }}>
        <Select title="Select primary*" variant="PRIMARY" selected />
        <Select title="Select secondary*" variant="SECONDARY" selected />
      </View>

      <Input label="Label" />
    </HomeContainer>
  )
}
