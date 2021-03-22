import styled, { keyframes } from 'styled-components'

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-1rem);
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

    font-size: 2.4rem;
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
