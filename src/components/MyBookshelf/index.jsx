import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

import { BookContainer } from "./MyBookshelf"

import Book from "../Book"
import Modal from "../Modal"
import BookshelfForm from "../BookshelfForm"

const MyBookshelf = ({ selectedFilter, search, showModal, setShowModal }) => {

    const [books, setBooks] = useState(JSON.parse(localStorage.getItem('bookshelf')) || '')
    const [editingBook, setEditingBook] = useState(null)

    const filterOptions = [
        { name: 'Todos', variant: 'filter' },
        { name: 'Lido', variant: 'filter' },
        { name: 'Lendo', variant: 'filter' },
        { name: 'Quero ler', variant: 'filter' },
        { name: 'Desistir', variant: 'filter' }
    ]

    const handleAddBook = (newBook) => {
        const updateBooks = [...books, newBook]
        setBooks(updateBooks)
        localStorage.setItem('bookshelf', JSON.stringify(updateBooks))
    }

    const handleDelete = (id) => {
        const updateBooks = books.filter(book => book.id !== id)
        setBooks(updateBooks)
        localStorage.setItem('bookshelf', JSON.stringify(updateBooks))
    }

    const onCancel = (event) => {
        event.preventDefault();
        setShowModal(false)
        setEditingBook(null)
    }

    return (
        <>
            <BookContainer>
                {books &&
                    books
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
                                onDelete={() => handleDelete(book.id)}
                                onEdit={() => {
                                    setEditingBook(book)
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
                        setEditingBook(null)
                    }}
                    title={'Adicionar Novo Livro'}
                >
                    <BookshelfForm
                        optionsSelectStatus={filterOptions.filter(item => item.name !== 'Todos')}
                        onAddBook={handleAddBook}
                        onUpdateBook={(updatedBooks) => {
                            setBooks(updatedBooks)
                            setShowModal(false)
                            setEditingBook(null)
                        }}
                        editingBook={editingBook}
                        onCancel={onCancel}
                    />
                </Modal>
            )}
        </>
    )
}

export default MyBookshelf