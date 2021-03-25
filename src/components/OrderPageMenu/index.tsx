import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import BeverageItemCards from '../BeverageItemCards'
import PizzaItemCards from '../PizzaItemCards'

import { Menu, BlackSideBar, WrapperOrderItemCards } from './styles'

interface IRouteProps {
  type: string
  prop: string
}

const OrderPageMenu: React.FC = () => {
  const { type, prop } = useParams<IRouteProps>()

  const [activeProductId, setActiveProductId] = useState('')

  if (type === 'pizzas') {
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <PizzaItemCards
            setActiveProductId={setActiveProductId}
            activeProductId={activeProductId}
            collection="Pizzas"
            category="Salgadas"
          />
          <PizzaItemCards
            setActiveProductId={setActiveProductId}
            activeProductId={activeProductId}
            collection="Pizzas"
            category="Doces"
          />
        </WrapperOrderItemCards>
      </Menu>
    )
  } else if (type === 'bebidas' && prop === 'sucos') {
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <BeverageItemCards
            setActiveProductId={setActiveProductId}
            activeProductId={activeProductId}
            collection="Bebida"
            category="Sucos"
          />
        </WrapperOrderItemCards>
      </Menu>
    )
  } else if (type === 'bebidas' && prop === 'refrigerantes') {
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <BeverageItemCards
            setActiveProductId={setActiveProductId}
            activeProductId={activeProductId}
            collection="Bebida"
            category="Refrigerantes"
          />
        </WrapperOrderItemCards>
      </Menu>
    )
  } else
    return (
      <Menu>
        <BlackSideBar />
        <WrapperOrderItemCards>
          <BeverageItemCards
            setActiveProductId={setActiveProductId}
            activeProductId={activeProductId}
            collection="Extras"
            category="??"
          />
        </WrapperOrderItemCards>
      </Menu>
    )
}

export default OrderPageMenu
