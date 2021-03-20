import styled, { keyframes } from 'styled-components'

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-20px);
    }
    to{
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  h1,
  h2,
  strong,
  p {
    animation: ${appearFromLeft} 1s;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  right: 0;
  top: 0;
  left: 0;

  background: var(--color-lightYellow);
`

export const HeaderWrapper = styled.div`
  display: flex;

  width: 100%;

  margin-right: 3.6rem;

  justify-content: space-between;

  h1 {
    padding-top: 5rem;
    padding-bottom: 3rem;
    margin-left: 2rem;

    font-size: 2.2rem;
  }

  > div {
    background-color: #fff;
    width: 3.6rem;
  }
`

export const BlackBar = styled.div`
  height: 3rem;
  width: 100%;

  margin-left: 2rem;

  border-radius: 1rem 0 0 0;
  background: #000;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 14rem;

  background: var(--color-lightYellow);
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  padding-top: 1.6rem;
  padding-bottom: 3rem;
  margin-right: 3.6rem;

  background: var(--color-lightYellow);

  h1 {
    margin-left: 2rem;

    font-size: 2.2rem;
  }
`

export const Orders = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    padding-bottom: 0;
  }

  h2 {
    padding-bottom: 1.2rem;
  }
`

export const OrderItem = styled.div`
  display: flex;

  padding: 1.2rem 0 1.2rem 2.4rem;

  justify-content: space-between;

  > h2 {
    padding-right: 1.2rem;

    font-size: 1.2rem;

    color: var(--color-highlightOrange);
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    padding-bottom: 0.4rem;
  }
`
