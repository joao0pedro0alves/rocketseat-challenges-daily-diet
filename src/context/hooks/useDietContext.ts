import { useContext } from 'react'
import { DietContext } from '../diet/context'

export function useDietContext() {
  const context = useContext(DietContext)

  if (!context) {
    throw new Error(
      'useDietContext only can be used inside a DietContextProvider'
    )
  }

  return context
}
