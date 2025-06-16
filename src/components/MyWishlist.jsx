import styled from "styled-components"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import WishlistItem from "./WishlistItem"
import ActionsHeader from "./ActionsHeader"

const MyWishlistContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
`

const ListHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
`

const List = styled.div`
    margin-top: 16px;
`

const MyWishlist = ({onChangeSearch, search}) => {
    
    const [selectedFilter, setSelectedFilter] = useState('Falta Adquirir')

    const iconFilter = <FontAwesomeIcon icon={faFilter} />
    const filterOptions = [
        { name: 'Todos', variant: 'filter' },
        { name: 'Adquiridos', variant: 'filter' },
        { name: 'Falta Adquirir', variant: 'filter' }
    ]
    const optionsFiltered = filterOptions.filter(item => item.name !== selectedFilter)
    return (
        <MyWishlistContainer>
            <ActionsHeader
                title={'Minha Lista de Desejos'}
                onClickAddButton={() => setShowModal(true)}
                onChangeSearch={onChangeSearch}
                mainButton={{ icon: iconFilter, name: selectedFilter, variant: 'filter' }}
                options={optionsFiltered}
                onSelectFilter={(option) => setSelectedFilter(option.name)}
            />
            <List>
                <WishlistItem />
            </List>
        </MyWishlistContainer>
    )
}

export default MyWishlist