export function priceFormatter(value: number) {
  const currencyFormatter = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return currencyFormatter.format(value)
}

export function displayFormatter(value: number) {
  const indexFormatter = new Intl.NumberFormat('pt-Br', {
    minimumIntegerDigits: 2
  })

  return indexFormatter.format(value)
}
