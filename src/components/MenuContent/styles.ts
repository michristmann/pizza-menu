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

  p {
    letter-spacing: 0.08rem;
  }
`

export const Item = styled.div`
  display: flex;

  padding: 0.8rem 0 0.8rem 2.4rem;

  justify-content: space-between;

  > a {
    display: flex;

    margin-top: -1.2rem;
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

  h2 {
    padding-bottom: 0.4rem;
  }
`
