export function timeApplyMask(value: string) {
  return value.substring(0, 5).replace(/^(\d{2})(\d{2})$/, '$1:$2')
}
