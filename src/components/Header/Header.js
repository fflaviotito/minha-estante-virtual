import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.layout.header};
  width: 100%;
  padding: 32px 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .08);
  border-bottom: 1px solid ${({ theme }) => theme.border};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 760px) {
    justify-content: center;
  }
`

export const HeaderTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px 1rem;
  flex-wrap: wrap;
`