export function fDecimal(number = 0) {
  return new Intl.NumberFormat('pt-Br', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(number)
}
