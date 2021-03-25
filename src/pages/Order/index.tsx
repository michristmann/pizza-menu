import React, { useContext } from 'react'
import { ChevronLeft } from '@styled-icons/boxicons-regular'
import { Link, useParams } from 'react-router-dom'

import OrderPageMenu from '../../components/OrderPageMenu'
import OrderMenuFooter from '../../components/OrderPageFooter'
import { ProductContext } from '../../hooks/products'

import {
  Container,
  Header,
  HeaderWrapper,
  WhiteSideBar,
  Navi,
  TopBlackBar
} from './styles'

interface IParamProps {
  type: string
}

const OrderPage: React.FC = () => {
  const { resetProductPreview } = useContext(ProductContext)

  const { type } = useParams<IParamProps>()

  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <WhiteSideBar />
          <Navi>
            <Link
              to="/"
              onClick={() => {
                resetProductPreview()
              }}
            >
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
