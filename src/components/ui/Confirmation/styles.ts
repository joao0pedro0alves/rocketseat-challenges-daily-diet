import styled from 'styled-components/native'

interface ConfirmationContainerStyleProps {
  open: boolean
}

export const ConfirmationContainer = styled.View<ConfirmationContainerStyleProps>`
  position: absolute;
  z-index: 100;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0,0,0,0.75);

  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const ConfirmationDialog = styled.View`
  padding: 16px;
  max-width: 80%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
`

export const ConfirmationHeader = styled.View``

export const ConfirmationContent = styled.View`
  margin: 16px 0;
`

export const ConfirmationActions = styled.View`
  flex-direction: row;
  gap: 8px;
`
