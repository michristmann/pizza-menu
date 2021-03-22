import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: auto;
  padding-top: 2.4rem;
  padding-bottom: 3rem;

  background: var(--color-lightYellow);

  > li {
    font-size: 1.6rem;
    padding-top: 0.2rem;
    padding-left: 5.6rem;
    align-items: start;

    ::marker {
      color: var(--color-highlightOrange);
    }
  }

  > strong {
    font-size: 1.8rem;
    text-align: end;
    padding-right: 5.6rem;
  }
`
