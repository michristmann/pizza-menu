import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  height: 100vh;

  margin-left: 2.4rem;

  justify-content: baseline;

  background: var(--color-lightYellow);
`

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: auto;
  padding-top: 2.4rem;
  padding-bottom: 3rem;

  > h1 {
    padding-bottom: 2.4rem;
  }

  > h1,
  li {
    padding-top: 0.2rem;
    padding-left: 5.6rem;
    align-items: start;
  }

  > li {
    font-size: 1.6rem;

    ::marker {
      color: var(--color-highlightOrange);
    }

    span {
      text-align: center;
      display: inline-block;
      width: 1.2rem;
      font-weight: 400;
    }
  }

  > a {
    text-decoration: none;
  }

  > strong {
    font-size: 1.8rem;
    text-align: end;
    padding-right: 5.6rem;
    padding-top: 1.2rem;
  }
`
