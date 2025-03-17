import styled from 'styled-components/native'

export type ChipVariants = 'PRIMARY' | 'SECONDARY'

type ChipContainerProps = {
  variant: ChipVariants
}

type CircleProps = {
  variant: ChipVariants
}

export const ChipContainer = styled.View<ChipContainerProps>`
  min-height: 34px;
  max-height: 34px;
  width: 100%;
  max-width: 144px;

  flex: 1;
  gap: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Circle = styled.View<CircleProps>`
  height: 8px;
  width: 8px;
  border-radius: 99px;

  background-color: ${({ variant, theme }) => (variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK)};
`
