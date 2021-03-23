import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from '@styled-icons/boxicons-regular'

import { MenuItemContext } from '../../hooks/menuItem'

import { Container, Item, Description } from './styles'

const MainPageMenu: React.FC = () => {
  const context = useContext(MenuItemContext)

  const pizzaItem = context.items
  const selectedPizzaItem = pizzaItem.find(item => item.name === 'Pizzas')

  const beverageItem = context.items
  const selectedBeverageItem = beverageItem.find(
    item => item.name === 'Bebidas'
  )

  const extraItem = context.items
  const selectedExtraItem = extraItem.find(item => item.name === 'Extras')

  return (
    <Container>
      <h1>PIZZAS</h1>
      {(selectedPizzaItem?.items || []).map(item => {
        return (
          <Item>
            <Description>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </Description>
            <Link to={`/order/pizzas/${item.prop}`}>
              <ChevronRight size={24} />
            </Link>
          </Item>
        )
      })}

      <h1>BEBIDAS</h1>
      {(selectedBeverageItem?.items || []).map(item => {
        return (
          <Item>
            <Description>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </Description>
            <Link to={`/order/bebidas/${item.name.toLocaleLowerCase()}`}>
              <ChevronRight size={24} />
            </Link>
          </Item>
        )
      })}

      <h1>EXTRAS</h1>
      {(selectedExtraItem?.items || []).map(item => {
        return (
          <Item>
            <Description>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </Description>
            <Link to="/order/extras">
              <ChevronRight size={24} />
            </Link>
          </Item>
        )
      })}
    </Container>
  )
}

export default MainPageMenu
