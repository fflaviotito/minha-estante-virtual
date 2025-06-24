import { StyledOptionsMenu, Options } from "./styles"

import Button from "../Button"

const OptionsMenu = ({mainButton, options, showMenu, toggleMenu, onSelect, variantButton}) => {    
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
                        variant={variantButton ? variantButton : item.variant}>
                        {item.icon}
                        {item.name}
                    </Button>)}
                </Options>
            }
        </StyledOptionsMenu>
    )
}

export default OptionsMenu