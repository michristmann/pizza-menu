import React from 'react'
import { useParams } from 'react-router-dom'
import BeverageItemCards from '../BeverageItemCards'

import PizzaItemCards from '../PizzaItemCards'

import { Menu, BlackSideBar, WrapperOrderItemCards } from './styles'

interface IOrderMenuProps {
  type: string
  prop: string
}

const OrderPageMenu: React.FC = () => {
  const { type, prop } = useParams<IOrderMenuProps>()

  if (type === 'pizzas') {
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <PizzaItemCards collection="Pizzas" category="Salgadas" />
          <PizzaItemCards collection="Pizzas" category="Doces" />
        </WrapperOrderItemCards>
      </Menu>
    )
  } else if (type === 'bebidas' && prop === 'sucos') {
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <BeverageItemCards collection="Bebida" category="Sucos" />
        </WrapperOrderItemCards>
      </Menu>
    )
  } else if (type === 'bebidas' && prop === 'refrigerantes') {
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <BeverageItemCards collection="Bebida" category="Refrigerantes" />
        </WrapperOrderItemCards>
      </Menu>
    )
  } else
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <BeverageItemCards collection="Extras" category="??" />
        </WrapperOrderItemCards>
      </Menu>
    )
}

export default OrderPageMenu
