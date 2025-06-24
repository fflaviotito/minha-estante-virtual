import styled from "styled-components"

export const StyledOptionsMenu = styled.div`
    position: relative;
    display: inline-block;
`

export const Options = styled.div`
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    background-color: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .4);
    z-index: 10;
`