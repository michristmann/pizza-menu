import React from 'react'

const formatter = new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
})

interface IFormatterProps {
  children?: number
}

const Formatter: React.FC<IFormatterProps> = ({ children, ...rest }) => (
  <strong {...rest}>{`${formatter.format(children || NaN)}`}</strong>
)

export default Formatter
