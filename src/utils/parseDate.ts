export function parseDate(dateText: string) {
  return dateText.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, '$3-$2-$1')
}
