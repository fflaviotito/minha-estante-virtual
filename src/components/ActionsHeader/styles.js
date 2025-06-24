import styled from "styled-components"

export const ActionsHeaderContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.border};
    margin-bottom: 16px;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
`

export const FilterToolbar = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 16px;

    @media (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`