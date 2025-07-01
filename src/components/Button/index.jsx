import { StyledButton } from './styles'

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