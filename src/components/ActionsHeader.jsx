import styled from "styled-components"
import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import SearchInput from "./SearchInput"
import OptionsMenu from "./OptionsMenu"
import { useState } from "react"

const ActionsHeaderContainer = styled.div`
    width: 100%;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
`

const FilterToolbar = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
`

const ActionsHeader = ({title, onClickAddButton, onChangeSearch, mainButton, options, onSelectFilter}) => {

    const [showMenu, setShowMenu] = useState(false)

    const onSelectOptionsMenu = (event) => {
        onSelectFilter(event)
        setShowMenu(false)
    }

    return (
        <ActionsHeaderContainer>
            <Header>
                <h2>{title}</h2>
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
                    showMenu={showMenu}
                    toggleMenu={() => setShowMenu(!showMenu)}
                    onSelect={onSelectOptionsMenu}
                />
            </FilterToolbar>
        </ActionsHeaderContainer>
    )
}

export default ActionsHeader