import React from 'react'

import Button from '../../components/Button'
import { Footer, Orders, OrderItem, Description } from './styles'

const MainPageFooter: React.FC = () => {
  return (
    <Footer>
      <h1>Seu Pedido</h1>
      <Orders>
        <OrderItem>
          <Description>
            <h2>1 PIZZA GRANDE</h2>
            <p>- 2/3 LOMBINHO CAIPIRA</p>
            <p>- 1/3 FILÉ MIGNON</p>
          </Description>
          <h2>R$ 35,90</h2>
        </OrderItem>
        <OrderItem>
          <Description>
            <h2>1 COCA-COLA 600ML</h2>
          </Description>
          <h2>R$ 6,50</h2>
        </OrderItem>
      </Orders>
      <Button>
        <h2>ENVIAR PEDIDO</h2>
        <p>R$ 42,20</p>
      </Button>
    </Footer>
  )
}

export default MainPageFooter
