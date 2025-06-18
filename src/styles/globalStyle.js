import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`