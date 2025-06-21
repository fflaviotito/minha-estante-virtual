import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

import { MainContainer, MainContent } from "./Main"

import ActionsHeader from "../ActionsHeader"
import MyBookshelf from '../MyBookshelf'
import MyWishlist from '../MyWishlist'

const Main = ({ view }) => {

    useEffect(() => { setSelectedFilter(view === 'bookcase' ? 'Todos' : 'Comprar') }, [view])

    const [selectedFilter, setSelectedFilter] = useState('Todos')
    const [search, setSearch] = useState('')
    const [showModal, setShowModal] = useState(false)

    const sectionTitle = (view === 'bookcase') ? 'Minha Estante' : 'Minha Lista de Desejos'

    const iconFilter = <FontAwesomeIcon icon={faFilter} />
    const filters = [
        { name: 'Todos', view: 'all' },
        { name: 'Lido', view: 'bookcase' },
        { name: 'Lendo', view: 'bookcase' },
        { name: 'Quero ler', view: 'bookcase' },
        { name: 'Desistir', view: 'bookcase' },
        { name: 'Comprado', view: 'wishlist' },
        { name: 'Comprar', view: 'wishlist' }
    ]
    const optionsFiltered = filters.filter(filter =>
        (filter.view === view || filter.view === 'all') && filter.name !== selectedFilter
    )
    const formOptions = filters.filter(filter => filter.view === view && filter.name !== 'Todos')

    return (
        <MainContainer>
            <MainContent>
                <ActionsHeader
                    title={sectionTitle}
                    onClickAddButton={() => setShowModal(true)}
                    onChangeSearch={valor => setSearch(valor)}
                    mainButton={{ icon: iconFilter, name: selectedFilter, variant: 'filter' }}
                    options={optionsFiltered}
                    variantButton={'filter'}
                    onSelectFilter={(option) => setSelectedFilter(option.name)}
                />
                <MyBookshelf
                    view={view}
                    selectedFilter={selectedFilter}
                    search={search}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    formOptions={formOptions}
                />
            </MainContent>
        </MainContainer>
    )
}

export default Main