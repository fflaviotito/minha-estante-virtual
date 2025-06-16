import styled, {css} from "styled-components"

const StyledButton = styled.button`
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 8px;

    ${props => props.$variant === 'navigation' && css`
        padding: 16px;
        font-size: 16px;
        width: 170px;
        
        &:hover {
            text-decoration: underline;
            font-weight: bold;
        }

        ${props => props.$active && css` 
            text-decoration: underline;
            font-weight: bold;
        `}
    `}

    ${props => props.$variant === 'add' && css`
        padding: 8px;
        font-size: 20px;
        width: 40px;
        height: 40px;
        background-color: #4CAF50;
        color: #FFF;

        &:hover {
            background-color: #388E3C;
        }
    `}

    ${props => props.$variant === 'filter' && css`
        padding: 8px;
        font-size: 1.25rem;
        width: 130px;
        background-color: #F0F2F5;
        color: #5A6470;
        border: 1px solid #D9DDE1;
        transition: .2s;

        &:hover {
            background-color: #E4E7EB;
            color: #4D555E;
            border: 1px solid #C8CED4;
        }
    `}

    ${props => props.$variant === 'primaryBookOption' && css`
        padding: 8px;
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
    `}

    ${props => props.$variant === 'secondaryBookOption' && css`
        padding: 8px;
        font-size: 1.25rem;
        width: 100px;
        justify-content: left;
    `}
`

const Button = ({onClick, variant, active, type, children}) => {
    return (
        <StyledButton
            onClick={onClick}
            $variant={variant}
            $active={active}
            type={type}>
            {children}
        </StyledButton>
    )
}

export default Button