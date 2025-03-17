import { Controller, useFormContext } from 'react-hook-form'
import { Input, type InputProps } from '../ui/Input'

import type { MealFormData } from '.'
import { ErrorMessage } from './styles'
import { View } from 'react-native'
import { useTheme } from 'styled-components'

interface RHFInputProps extends InputProps {
  name: keyof MealFormData
}

export function RHFInput({ name, inputStyle, ...rest }: RHFInputProps) {
  const theme = useTheme()

  const {
    control,
    formState: { errors },
  } = useFormContext<MealFormData>()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        const error = errors[name]

        return (
          <View>
            <Input
              value={String(value)}
              onChangeText={value => onChange(value)}
              inputStyle={[
                inputStyle,
                error && { borderColor: theme.COLORS.RED_MID },
              ]}
              {...rest}
            />

            {error && (
              <ErrorMessage style={{ marginTop: 2 }}>
                {error.message}
              </ErrorMessage>
            )}
          </View>
        )
      }}
    />
  )
}
