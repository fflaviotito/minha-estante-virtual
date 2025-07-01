import styled from "styled-components"

export const FormInputContainer = styled.div`

`

export const Label = styled.label`
    display: block;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text};
    margin-bottom: 4px;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px 12px;
    border: 1px solid ${({ $error, theme }) => ($error ? theme.danger : theme.border)};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
        border-color: ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}33;
    }

    &::placeholder {
        color: ${({ theme }) => theme.textLight};
    }
`

export const ErrorMessage = styled.p`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.danger};
    margin-top: 4px;
    padding-left: 2px;
`