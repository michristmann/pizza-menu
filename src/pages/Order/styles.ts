import styled, { keyframes } from 'styled-components'

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(20px);
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
  p,
  li,
  button,
  strong {
    animation: ${appearFromRight} 1s;
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

export const WhiteSideBar = styled.div`
  background-color: #fff;
  width: 2.4rem;
`

export const HeaderWrapper = styled.div`
  display: flex;
`

export const Navi = styled.div`
  display: flex;

  padding-top: 5rem;
  padding-bottom: 2rem;

  justify-content: space-between;

  > a {
    margin-left: -2.2rem;

    text-decoration: none;
    color: #000;
  }

  h1 {
    font-size: 3rem;
  }
`

export const BottonBlackBar = styled.div`
  height: 1rem;
  width: 3.6rem;

  border-radius: 0 1rem 0 0;

  background: #000;
`

export const Footer = styled.div`
  display: flex;

  margin-top: auto;
  height: 100vh;

  padding: 1.2rem 0 1.2rem 0;
  margin-left: 2.4rem;

  background: var(--color-lightYellow);

  > button {
    top: 0;
  }
`
