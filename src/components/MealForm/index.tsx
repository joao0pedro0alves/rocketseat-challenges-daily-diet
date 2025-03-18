import { View } from 'react-native'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import { Select } from '../ui/Select'
import { Typography } from '../ui/Typography'
import { Button } from '../ui/Button'

import { RHFInput } from './RHFInput'

import {
  DateContainer,
  FormContainer,
  MealFormContainer,
  SelectContainer,
} from './styles'

import { dateApplyMask } from '@/utils/masks/date-apply-mask'
import { timeApplyMask } from '@/utils/masks/time-apply-mask'
import { format } from 'date-fns'

// --------------------------------------------------------------------------

const mealFormValidationScheme = z.object({
  name: z.string().min(3, 'Informe o nome da refeição. (Sanduiche, Café...)'),
  description: z.string().min(10, 'Descreva a refeição'),
  date: z.string().min(8, 'Informe a data da refeição'),
  time: z.string().min(5, 'Informe a hora da refeição'),
  belongsToDiet: z.boolean({
    required_error: 'Informe se a refeição pertence a dieta.',
  }),
})

export type MealFormData = z.infer<typeof mealFormValidationScheme>

interface MealFormProps {
  mode?: 'edit' | 'new'
  initialValues?: Partial<MealFormData>

  onSubmit: (data: MealFormData) => void
}

export function MealForm({ mode, initialValues, onSubmit }: MealFormProps) {
  const form = useForm<MealFormData>({
    resolver: zodResolver(mealFormValidationScheme),
    defaultValues: {
      name: initialValues?.name || '',
      description: initialValues?.description || '',
      date: initialValues?.date || format(new Date(), 'dd/MM/yyyy'),
      time: initialValues?.time || format(new Date(), 'hh:mm'),
      belongsToDiet: initialValues?.belongsToDiet ?? true,
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form

  return (
    <MealFormContainer showsVerticalScrollIndicator={false}>
      <FormProvider {...form}>
        <FormContainer>
          <RHFInput name="name" label="Nome" />

          <RHFInput
            name="description"
            label="Descrição"
            multiline
            inputStyle={{
              maxHeight: 'auto',
              height: 120,
            }}
          />

          <DateContainer>
            <RHFInput
              maskFn={dateApplyMask}
              name="date"
              label="Data"
              keyboardType="numeric"
              placeholder="DD/MM/YYYY"
              style={{
                minWidth: 153,
              }}
            />

            <RHFInput
              maskFn={timeApplyMask}
              name="time"
              label="Hora"
              keyboardType="numeric"
              placeholder="HH:MM"
              style={{
                minWidth: 153,
              }}
            />
          </DateContainer>

          <View style={{ flex: 1 }}>
            <Typography variant="h4" style={{ marginBottom: 8 }}>
              Está dentro da dieta?
            </Typography>

            <Controller
              control={control}
              name="belongsToDiet"
              render={({ field: { value, onChange } }) => {
                return (
                  <SelectContainer>
                    <Select
                      selected={value}
                      title="Sim"
                      onPress={() => onChange(true)}
                    />

                    <Select
                      selected={!value}
                      title="Não"
                      variant="SECONDARY"
                      onPress={() => onChange(false)}
                    />
                  </SelectContainer>
                )
              }}
            />
          </View>

          {mode === 'edit' ? (
            <Button
              onPress={handleSubmit(onSubmit)}
              title="Salvar alterações"
              disabled={isSubmitting}
            />
          ) : (
            <Button
              onPress={handleSubmit(onSubmit)}
              title="Cadastrar refeição"
              disabled={isSubmitting}
            />
          )}
        </FormContainer>
      </FormProvider>
    </MealFormContainer>
  )
}
