import styled, {css} from "styled-components"

export const StyledButton = styled.button`
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 8px;

    ${({ $variant, theme, $active }) => $variant === 'navigation' && css`
        padding: 16px;
        font-size: 16px;
        width: 170px;
        color: ${$active ? theme.primary : theme.text};

        &:hover {
            text-decoration: underline;
            font-weight: bold;
            color: ${theme.primary};
        }

        ${$active && css`
            text-decoration: underline;
            font-weight: bold;
        `}
    `}

    ${({ $variant, theme }) => $variant === 'filter' && css`
        font-size: 1.1rem;
        width: 130px;
        background-color: ${theme.card};
        color: ${theme.textLight};
        border: 1px solid ${theme.border};

        &:hover {
            background-color: ${theme.background};
            color: ${theme.text};
            border-color: ${theme.primary};
        }
    `}

    ${({ $variant, theme }) => $variant === 'primaryBookOption' && css`
        font-size: 1rem;
        width: 30px;
        height: 30px;
        color: ${theme.text};

        &:hover {
            color: ${theme.primary};
        }
    `}

    ${({ $variant, theme }) => $variant === 'secondaryBookOption' && css`
        font-size: 1rem;
        justify-content: left;
        background-color: ${theme.card};
        color: ${theme.text};
        border: 1px solid ${theme.border};

        &:hover {
            background-color: ${theme.background};
            color: ${theme.primary};
            border-color: ${theme.primary};
        }
    `}

    ${({ $variant, theme }) => $variant === 'form' && css`
        background-color: ${theme.primary};
        color: #FFF;
        font-size: 1rem;
        font-weight: bold;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: ${theme.secondary};
        }

        &:disabled {
            background-color: ${theme.border};
            color: ${theme.textLight};
            cursor: not-allowed;
        }
    `}
`