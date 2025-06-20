import useStorageList from "../../hooks/useStorageList"

import { BookContainer } from "./MyBookshelf"

import Book from "../Book"
import Modal from "../Modal"
import BookshelfForm from "../BookshelfForm"

const MyBookshelf = ({ view, selectedFilter, search, showModal, setShowModal, formOptions }) => {

    const { list, addItem, updateItem, deleteItem, editingItem, setEditingItem, clearEditing } = useStorageList(view)

    const onCancel = (event) => {
        event.preventDefault();
        setShowModal(false)
        clearEditing()
    }

    return (
        <>
            <BookContainer>
                {list &&
                    list
                        .filter(item => selectedFilter === 'Todos'
                            ? true
                            : item.status === selectedFilter
                        )
                        .filter(item => !search
                            ? true
                            : item.titulo.toLowerCase().includes(search.toLowerCase()) ||
                            item.autor.toLowerCase().includes(search.toLowerCase()) ||
                            item.genero.toLowerCase().includes(search.toLowerCase())
                        )
                        .map(book => 
                            <Book
                                key={book.id}
                                book={book}
                                onDelete={() => deleteItem(book.id)}
                                onEdit={() => {
                                    setEditingItem(book)
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
                    title={'Adicionar Novo Livro'}
                >
                    <BookshelfForm
                        optionsSelectStatus={formOptions}
                        onAddBook={addItem}
                        onUpdateBook={(update) => {
                            updateItem(update)
                            setShowModal(false)
                            setEditingItem(null)
                        }}
                        editingBook={editingItem}
                        onCancel={onCancel}
                    />
                </Modal>
            )}
        </>
    )
}

export default MyBookshelf