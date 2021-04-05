import React from 'react'

import MainPageFooter from '../../components/MainPageFooter'
import MainPageMenu from '../../components/MainPageMenu'

import { Container, Header, HeaderWrapper, BlackBar, Menu } from './styles'

const MainPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderWrapper>
          <h1> MANGIARE DELIVERY</h1>
          <div />
        </HeaderWrapper>
        <BlackBar />
      </Header>

      <Menu>
        <MainPageMenu />
      </Menu>

      <MainPageFooter />
    </Container>
  )
}

export default MainPage
