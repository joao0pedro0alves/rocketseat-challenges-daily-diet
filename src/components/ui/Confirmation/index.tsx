import type { ReactNode } from 'react'

import { Button } from '../Button'
import { Typography } from '../Typography'
import {
  ConfirmationActions,
  ConfirmationContainer,
  ConfirmationContent,
  ConfirmationDialog,
  ConfirmationHeader,
} from './styles'

interface ConfirmationProps {
  title: string
  content: ReactNode

  open: boolean
  onAccept?: () => void
  onRefuse?: () => void
}

export function Confirmation(props: ConfirmationProps) {
  const { open, title, content, onAccept, onRefuse } = props

  return (
    <ConfirmationContainer open={open}>
      <ConfirmationDialog>
        <ConfirmationHeader>
          <Typography variant="h3">{title}</Typography>
        </ConfirmationHeader>

        <ConfirmationContent>
          <Typography color="GRAY_300">{content}</Typography>
        </ConfirmationContent>

        <ConfirmationActions>
          <Button title="Sim" variant="FILLED" onPress={onAccept} />

          <Button title="Não" variant="OUTLINED" onPress={onRefuse} />
        </ConfirmationActions>
      </ConfirmationDialog>
    </ConfirmationContainer>
  )
}
