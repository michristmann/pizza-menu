import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  right: 0;
  margin-left: 2rem;
  border-radius: 0 0 0 1rem;

  justify-content: space-around;

  background: #000;
  color: #fff;

  > h1 {
    padding: 1.2rem 0 1.2rem 2.4rem;

    &:first-child {
      padding-top: 0;
    }
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  p,
  strong {
    font-size: 1.6rem;
  }

  p {
    letter-spacing: 0rem;
  }
`

export const Item = styled.div`
  display: flex;

  padding: 0.8rem 0 0.8rem 2.4rem;

  justify-content: space-between;

  > a {
    display: flex;

    margin-bottom: auto;
    padding-right: 1.2rem;

    align-items: center;

    text-decoration: none;
    font-size: 0.8rem;
    color: var(--color-highlightOrange);
  }

  &:last-child {
    padding-bottom: 2.4rem;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;

  h2 {
    padding-bottom: 0.4rem;
  }
`
