import styled from "styled-components"

export const SearchInputContainer = styled.div`
    position: relative;
    width: 500px;

    > svg {
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        color: ${({ $isFocused, theme }) => $isFocused ? theme.primary :theme.textLight};
    }
`

export const Input = styled.input`
    padding: 8px 8px 8px 32px;
    font-size: 16px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 6px;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};

    &::placeholder {
        color: ${({ theme }) => theme.textLight};
    }

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 2px rgba(48, 95, 114, 0.2);
    }
`