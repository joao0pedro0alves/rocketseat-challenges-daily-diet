import { View } from 'react-native'

import { Input } from '../ui/Input'
import { Select } from '../ui/Select'
import { Typography } from '../ui/Typography'

import { DateContainer, MealFormContainer, SelectContainer } from './styles'
import { Button } from '../ui/Button'

interface MealFormProps {
  onSubmit?: () => void
  mode?: 'edit' | 'new'
}

export function MealForm({ mode, onSubmit }: MealFormProps) {
  return (
    <MealFormContainer>
      <Input label="Nome" />

      <Input
        label="Descrição"
        multiline
        inputStyle={{ maxHeight: 'auto', height: 120 }}
      />

      <DateContainer>
        <Input label="Data" style={{ width: '50%' }} keyboardType="numeric" />

        <Input label="Hora" style={{ width: '50%' }} keyboardType="numeric" />
      </DateContainer>

      <View style={{ flex: 1 }}>
        <Typography variant="h4" style={{ marginBottom: 8 }}>
          Está dentro da dieta?
        </Typography>

        <SelectContainer>
          <Select selected title="Sim" />
          <Select title="Não" variant="SECONDARY" />
        </SelectContainer>
      </View>

      {mode === 'edit' ? (
        <Button onPress={onSubmit} title="Salvar alterações" />
      ) : (
        <Button onPress={onSubmit} title="Cadastrar refeição" />
      )}
    </MealFormContainer>
  )
}
