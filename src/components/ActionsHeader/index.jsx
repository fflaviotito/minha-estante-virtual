import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { ActionsHeaderContainer, Header, Title, FilterToolbar } from "./styles"

import Button from "../Button"
import SearchInput from "../SearchInput"
import OptionsMenu from "../OptionsMenu"

const ActionsHeader = ({ title, onClickAddButton, onChangeSearch, mainButton, options, variantButton, onSelectFilter }) => {

    const [showMenu, setShowMenu] = useState(false)

    const onSelectOptionsMenu = (event) => {
        onSelectFilter(event)
        setShowMenu(false)
    }

    return (
        <ActionsHeaderContainer>
            <Header>
                <Title>{title}</Title>
                <Button
                    onClick={onClickAddButton}
                    variant={'primaryBookOption'}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </Header>
            <FilterToolbar>
                <SearchInput
                    type={'search'}
                    placeholder={'Buscar livro...'}
                    onChange={onChangeSearch}
                />
                <OptionsMenu
                    mainButton={mainButton}
                    options={options}
                    variantButton={variantButton}
                    showMenu={showMenu}
                    toggleMenu={() => setShowMenu(!showMenu)}
                    onSelect={onSelectOptionsMenu}
                />
            </FilterToolbar>
        </ActionsHeaderContainer>
    )
}

export default ActionsHeader