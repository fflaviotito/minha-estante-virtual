import useStorageList from "../../hooks/useStorageList"

import { BookContainer } from "./MyBookshelf"

import Book from "../Book"
import WishlistItem from "../WishlistItem"
import BookshelfForm from "../BookshelfForm"
import WishlistForm from "../WishlistForm"
import Modal from "../Modal"

const MyBookList = ({ view, selectedFilter, search, showModal, setShowModal, formOptions }) => {

    const {
        addItem,
        updateItem,
        deleteItem,
        editingItem,
        setEditingItem,
        clearEditing,
        filteredList
    } = useStorageList(view, selectedFilter, search)

    const ItemComponent = view === 'bookcase' ? Book : WishlistItem
    const FormComponent = view === 'bookcase' ? BookshelfForm : WishlistForm
    const modalTitle = !editingItem ? 'Adicionar Novo Livro' : 'Editar Livro'

    const openOrCloseModal = (item = null) => {
        setShowModal(!showModal)
        item ? setEditingItem(item) : clearEditing()
    }

    return (
        <>
            <BookContainer>
                {filteredList &&
                    filteredList.map(item =>
                        <ItemComponent
                            key={item.id}
                            item={item}
                            onDelete={() => deleteItem(item.id)}
                            onEdit={() => openOrCloseModal(item)}
                        />
                    )
                }
            </BookContainer>
            {showModal && (
                <Modal
                    onClose={() => openOrCloseModal()}
                    title={modalTitle}
                >
                    <FormComponent
                        optionsSelectStatus={formOptions}
                        onAdd={addItem}
                        onUpdate={(update) => {
                            updateItem(update)
                            openOrCloseModal()
                        }}
                        editingItem={editingItem}
                        onCancel={() => openOrCloseModal()}
                    />
                </Modal>
            )}
        </>
    )
}

export default MyBookList