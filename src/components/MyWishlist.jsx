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

const MyWishlist = ({ selectedFilter, search, showModal, setShowModal, formOptions }) => {
    
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || '')
    const [editingItem, setEditingItem] = useState(null)

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
        <>
            <List>
                {wishlist &&
                    wishlist
                        .filter(item => selectedFilter === 'Todos'
                            ? true
                            : item.status === selectedFilter
                        )
                        .filter(item => !search
                            ? true
                            : item.titulo.toLowerCase().includes(search.toLowerCase())
                        )
                        .map(item =>
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
                        optionsSelectStatus={formOptions}
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
        </>
    )
}

export default MyWishlist