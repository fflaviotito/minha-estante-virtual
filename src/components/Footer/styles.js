import styled from "styled-components"

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 32px 24px;
    background-color: ${({ theme }) => theme.layout.footer};
    border-top: 1px solid ${({ theme }) => theme.border};
`

export const FooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.textLight};
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
`

export const IconLink = styled.a`
    color: ${({ theme }) => theme.text};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`