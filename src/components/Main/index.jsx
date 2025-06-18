import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

import { MainContainer, MainContent } from "./Main"

import ActionsHeader from "../ActionsHeader"
import MyBookshelf from '../MyBookshelf'
import MyWishlist from '../MyWishlist'

const Main = ({ view }) => {

    const [search, setSearch] = useState('')
    const [selectedFilter, setSelectedFilter] = useState('Todos')

    const sectionTitle = (view === 'bookcase') ? 'Minha Estante' : 'Minha Lista de Desjos'

    const iconFilter = <FontAwesomeIcon icon={faFilter} />
    const filterOptions = [
        { name: 'Todos', variant: 'filter', view: 'all' },
        { name: 'Lido', variant: 'filter', view: 'bookcase' },
        { name: 'Lendo', variant: 'filter', view: 'bookcase' },
        { name: 'Quero ler', variant: 'filter', view: 'bookcase' },
        { name: 'Desistir', variant: 'filter', view: 'bookcase' },
        { name: 'Comprado', variant: 'filter', view: 'wishlist' },
        { name: 'Comprar', variant: 'filter', view: 'wishlist' }
    ]
    const optionsFiltered = filterOptions.filter(item =>
        (item.view === view || item.view === 'all') && item.name !== selectedFilter
    )

    return (
        <MainContainer>
            <ActionsHeader
                title={sectionTitle}
                onClickAddButton={() => setShowModal(true)}
                onChangeSearch={valor => setSearch(valor)}
                mainButton={{ icon: iconFilter, name: selectedFilter, variant: 'filter' }}
                options={optionsFiltered}
                onSelectFilter={(option) => setSelectedFilter(option.name)}
            />
            <MainContent>
                {view === 'bookcase' &&
                    <MyBookshelf
                        onChangeSearch={valor => setSearch(valor)}
                        search={search}
                    />
                }
                {view === 'wishlist' &&
                    <MyWishlist
                        onChangeSearch={valor => setSearch(valor)}
                        search={search}
                    />
                }
            </MainContent>
        </MainContainer>
    )
}

export default Main