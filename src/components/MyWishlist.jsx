import useStorageList from "../hooks/useStorageList"

import styled from "styled-components"

import WishlistItem from "./WishlistItem"
import Modal from "./Modal"
import WishlistForm from "./WishlistForm"

const List = styled.div`
    margin-top: 16px;
`

const MyWishlist = ({ view, selectedFilter, search, showModal, setShowModal, formOptions }) => {
    
    const {
        addItem,
        updateItem,
        deleteItem,
        editingItem,
        setEditingItem,
        clearEditing,
        filteredList
    } = useStorageList(view, selectedFilter, search)

    const onCancel = (event) => {
        event.preventDefault();
        setShowModal(false)
        clearEditing()
    }

    return (
        <>
            <List>
                {filteredList &&
                    filteredList.map(item =>
                        <WishlistItem
                            key={item.id}
                            item={item}
                            onEdit={() => {
                                setEditingItem(item)
                                setShowModal(true)
                            }}
                            onDelete={() => deleteItem(item.id)}
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
                        onAddItem={addItem}
                        onUpdateItem={(updatedWishlist) => {
                            updateItem(updatedWishlist)
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