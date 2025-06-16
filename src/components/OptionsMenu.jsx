import styled from "styled-components"
import Button from "./Button"

const StyledOptionsMenu = styled.div`
    position: relative;
`

const Options = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 1;
`

const OptionsMenu = ({mainButton, options, showMenu, toggleMenu, onSelect}) => {    
    return (
        <StyledOptionsMenu>
            <Button
                onClick={toggleMenu}
                variant={mainButton.variant}>
                {mainButton.icon}{mainButton.name}
            </Button>
            {showMenu &&
                <Options>
                    {options.map(item => <Button
                        key={item.name}
                        onClick={() => onSelect(item)}
                        variant={item.variant}>
                        {item.icon}
                        {item.name}
                    </Button>)}
                </Options>
            }
        </StyledOptionsMenu>
    )
}

export default OptionsMenu