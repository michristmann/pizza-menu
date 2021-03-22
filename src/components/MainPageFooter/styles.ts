import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 1.6rem;
  padding-bottom: 3rem;
  margin-right: 3.6rem;

  background: var(--color-lightYellow);

  h1 {
    margin-left: 2rem;

    font-size: 2.4rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
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
