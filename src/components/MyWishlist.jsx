import styled from "styled-components"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import WishlistItem from "./WishlistItem"
import ActionsHeader from "./ActionsHeader"
import Modal from "./Modal"
import WishlistForm from "./WishlistForm"

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
    
    const [selectedFilter, setSelectedFilter] = useState('Comprar')
    const [showModal, setShowModal] = useState(false)
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || '')
    const [editingItem, setEditingItem] = useState(null)

    const iconFilter = <FontAwesomeIcon icon={faFilter} />
    const filterOptions = [
        { name: 'Todos', variant: 'filter' },
        { name: 'Comprado', variant: 'filter' },
        { name: 'Comprar', variant: 'filter' }
    ]
    const optionsFiltered = filterOptions.filter(item => item.name !== selectedFilter)

    const handleDelete = (id) => {
        const updateWishlist = wishlist.filter(item => item.id !== id)
        setWishlist(updateWishlist)
        localStorage.setItem('wishlist', JSON.stringify(updateWishlist))
    }

    const onCancel = (event) => {
            event.preventDefault();
            setShowModal(false)
    }

    const handleAddItem = (newItem) => {
        const updateWishlist = [...wishlist, newItem]
        setWishlist(updateWishlist)
        localStorage.setItem('wishlist', JSON.stringify(updateWishlist))
    }
    
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
                {wishlist &&
                    wishlist.map(item =>
                        <WishlistItem
                            key={item.id}
                            item={item}
                            onEdit={() => {
                                setEditingItem(item)
                                setShowModal(true)
                            }}
                            onDelete={() => handleDelete(item.id)}
                        />
                    )
                }
            </List>
            {showModal && (
                <Modal
                    onClose={() => {
                        setShowModal(false)
                        setEditingItem(null)
                    }}
                    title={'Adicionar Novo Item'}
                >
                    <WishlistForm 
                        optionsSelectStatus={filterOptions.filter(item => item.name !== 'Todos')}
                        onCancel={onCancel}
                        onAddItem={handleAddItem}
                        onUpdateItem={(updatedWishlist) => {
                            setWishlist(updatedWishlist)
                            setShowModal(false)
                            setEditingItem(null)
                        }}
                        editingItem={editingItem}
                    />
                </Modal>
            )}
        </MyWishlistContainer>
    )
}

export default MyWishlist