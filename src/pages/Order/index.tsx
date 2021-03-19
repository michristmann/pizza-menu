import React from 'react'
import { ChevronLeft } from '@styled-icons/boxicons-regular'
import { Link, useParams } from 'react-router-dom'

import {
  Container,
  Header,
  HeaderWrapper,
  WhiteSideBar,
  Navi,
  BottonBlackBar,
  Footer
} from './styles'

import OrderMenu from '../../components/OrderMenu'
import Button from '../../components/Button'

const OrderPage: React.FC = () => {
  const { type } = useParams<{ type: string }>()

  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <WhiteSideBar />
          <Navi>
            <Link to="/">
              <ChevronLeft size={42} />
            </Link>
            <h1>{type.toUpperCase()}</h1>
          </Navi>
        </HeaderWrapper>
        <BottonBlackBar />
      </Header>

      <OrderMenu />

      <Footer>
        <Button>
          <h2>ADICIONAR PIZZA</h2>
          <p>2 sabores - R$ 35,90</p>
        </Button>
      </Footer>
    </Container>
  )
}

export default OrderPage
