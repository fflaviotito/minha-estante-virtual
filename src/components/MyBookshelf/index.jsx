import useStorageList from "../../hooks/useStorageList"

import { BookContainer } from "./MyBookshelf"

import Book from "../Book"
import WishlistItem from "../WishlistItem"
import BookshelfForm from "../BookshelfForm"
import WishlistForm from "../WishlistForm"
import Modal from "../Modal"

//MyBookList
const MyBookshelf = ({ view, selectedFilter, search, showModal, setShowModal, formOptions }) => {

    const {
        addItem,
        updateItem,
        deleteItem,
        editingItem,
        setEditingItem,
        clearEditing,
        filteredList
    } = useStorageList(view, selectedFilter, search)

    const ItemComponent = (view === 'bookcase') ? Book : WishlistItem
    const FormComponent = (view === 'bookcase') ? BookshelfForm : WishlistForm
    const modalTitle = (!editingItem) ? 'Adicionar Novo Livro' : 'Editar Livro'

    const onCancel = (event) => {
        event.preventDefault();
        setShowModal(false)
        clearEditing()
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
                            onEdit={() => {
                                setEditingItem(item)
                                setShowModal(true)
                            }}
                        />
                    )
                }
            </BookContainer>
            {showModal && (
                <Modal
                    onClose={() => {
                        setShowModal(false)
                        setEditingItem(null)
                    }}
                    title={modalTitle}
                >
                    <FormComponent
                        optionsSelectStatus={formOptions}
                        onAdd={addItem}
                        onUpdate={(update) => {
                            updateItem(update)
                            setShowModal(false)
                            setEditingItem(null)
                        }}
                        editingItem={editingItem}
                        onCancel={onCancel}
                    />
                </Modal>
            )}
        </>
    )
}

export default MyBookshelf