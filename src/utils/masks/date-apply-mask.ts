export function dateApplyMask(value: string) {
  return value.substring(0, 10).replace(/^(\d{2})(\d{2})(\d{4})$/, '$1/$2/$3')
}
