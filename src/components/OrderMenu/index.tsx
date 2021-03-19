import React from 'react'
import { useParams } from 'react-router-dom'
import BeverageItemCards from '../BeverageItemCards'

import PizzaItemCards from '../PizzaItemCards'

import { Menu, BlackSideBar, WrapperOrderItemCards } from './styles'

const OrderMenu: React.FC = () => {
  const { type } = useParams<{ type: string }>()

  if (type === 'pizzas')
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <PizzaItemCards collection="Pizzas" category="Salgadas" />
          <PizzaItemCards collection="Pizzas" category="Doces" />
        </WrapperOrderItemCards>
      </Menu>
    )
  else
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <BeverageItemCards collection="Bebida" category="Sucos" />
        </WrapperOrderItemCards>
      </Menu>
    )
}

export default OrderMenu
