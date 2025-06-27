import useStorageList from "../../hooks/useStorageList"

import { BookcaseContainer, WishlistContainer } from "./styles"

import Book from "../Book"
import WishlistItem from "../WishlistItem"
import BookcaseForm from "../BookcaseForm"
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

    const StyledComponent = view === 'bookcase' ? BookcaseContainer : WishlistContainer
    const ItemComponent = view === 'bookcase' ? Book : WishlistItem
    const FormComponent = view === 'bookcase' ? BookcaseForm : WishlistForm
    const modalTitle = !editingItem ? 'Adicionar Novo Livro' : 'Editar Livro'

    const openOrCloseModal = (item = null) => {
        setShowModal(!showModal)
        item ? setEditingItem(item) : clearEditing()
    }

    return (
        <>
            <StyledComponent>
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
            </StyledComponent>
            {showModal && (
                <Modal
                    onClose={() => openOrCloseModal()}
                    title={modalTitle}
                >
                    <FormComponent
                        optionsSelectStatus={formOptions}
                        onAdd={(newItem) => {
                            addItem(newItem)
                            openOrCloseModal()
                        }}
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