import styled from "styled-components"

export const BookcaseContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    gap: 4px 8px;
    align-items: stretch;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1175px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const WishlistContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`