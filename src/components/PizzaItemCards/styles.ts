import styled, { css } from 'styled-components'

interface ContainerProps {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 0.8rem 2.4rem 2rem;

  justify-content: space-between;
`

export const Item = styled.div<ContainerProps>`
  display: flex;

  margin-left: -1.2rem;

  align-items: center;
  justify-content: space-between;
  padding: 2rem 0 1.2rem 1.2rem;

  ${props =>
    props.isActive &&
    css`
      border-radius: 2rem;

      background: #fff;
    `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;

  padding-bottom: 1.2rem;

  align-items: center;

  > strong,
  h2 {
    padding-right: 1.2rem;
  }

  p,
  strong {
    font-size: 1.2rem;
  }

  h2 {
    margin-top: -0.4rem;
  }

  strong {
    margin-top: -0.3rem;
    color: #8b8b8b;
  }
`

export const PromoTag = styled.div`
  padding: 0.3rem 0.6rem;
  border-radius: 1rem 0 1rem 0;

  background: var(--color-highlightOrange);
  color: #fff;
`

export const Description = styled.div`
  p {
    padding-bottom: 0.4rem;
  }

  strong {
    color: var(--color-highlightGreen);
  }
`

export const Button = styled.button`
  display: flex;

  height: 2rem;
  width: 2rem;

  padding: 1.2rem;

  align-items: center;
  justify-content: center;

  font-size: 2.4rem;

  border: none;
  background-color: transparent;
  color: var(--color-highlightOrange);

  > p {
    margin-top: -1rem;
  }
`
