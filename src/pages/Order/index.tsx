import React from 'react'
import { ChevronLeft } from '@styled-icons/boxicons-regular'
import { Link, useParams } from 'react-router-dom'

import {
  Container,
  Header,
  HeaderWrapper,
  WhiteSideBar,
  Navi,
  TopBlackBar
} from './styles'

import OrderPageMenu from '../../components/OrderPageMenu'
import OrderMenuFooter from '../../components/OrderPageFooter'

interface IParamProps {
  type: string
}

const OrderPage: React.FC = () => {
  const { type } = useParams<IParamProps>()

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
        <TopBlackBar />
      </Header>

      <OrderPageMenu />

      <OrderMenuFooter />
    </Container>
  )
}

export default OrderPage
