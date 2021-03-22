import React from 'react'

import Button from '../Button'
import { Footer } from './styles'

const OrderPageFooter: React.FC = () => {
  return (
    <Footer>
      <li>1/3 - A Moda da Casa</li>
      <li>1/3 - Dois Amores</li>
      <li>1/3 - Bacon</li>
      <strong> Total: R$: 60,90</strong>
      <Button>
        <h2>ADICIONAR AO CARRINHO</h2>
      </Button>
    </Footer>
  )
}

export default OrderPageFooter
