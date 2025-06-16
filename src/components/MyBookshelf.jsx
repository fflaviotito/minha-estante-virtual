import styled from "styled-components"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFilter } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button"
import SearchInput from "./SearchInput"
import OptionsMenu from "./OptionsMenu"
import Book from "./Book"
import Modal from "./Modal"
import BookshelfForm from "./BookshelfForm"

const MyBookshelfContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
`

const ShelfHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
`

const FilterToolbar = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
`

const BookContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 8px;
    width: 100%;
`

const MyBookshelf = () => {

    const [search, setSearch] = useState('')
    const [showMenu, setShowMenu] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState('Todos')
    const [showModal, setShowModal] = useState(false)
    const [books, setBooks] = useState(JSON.parse(localStorage.getItem('bookshelf')) || '')
    const [editingBook, setEditingBook] = useState(null)

    const iconFilter = <FontAwesomeIcon icon={faFilter} />
    const filterOptions = [
        { name: 'Todos', variant: 'filter' },
        { name: 'Lido', variant: 'filter' },
        { name: 'Lendo', variant: 'filter' },
        { name: 'Quero ler', variant: 'filter' },
        { name: 'Desistir', variant: 'filter' }
    ]
    const optionsFiltered = filterOptions.filter(item => item.name !== selectedFilter)

    const handleSelect = (option) => {
        setSelectedFilter(option.name)
        setShowMenu(false)
    }

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
        <MyBookshelfContainer>
            <ShelfHeader>
                <h2>Minha Estante</h2>
                <Button
                    onClick={() => setShowModal(true)}
                    variant={'primaryBookOption'}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </ShelfHeader>
            <FilterToolbar>
                <SearchInput
                    type={'search'}
                    placeholder={'Buscar livro...'}
                    onChange={valor => setSearch(valor)}
                />
                <OptionsMenu
                    mainButton={{ icon: iconFilter, name: selectedFilter, variant: 'filter' }}
                    options={optionsFiltered}
                    showMenu={showMenu}
                    toggleMenu={() => setShowMenu(!showMenu)}
                    onSelect={handleSelect}
                />
            </FilterToolbar>
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
        </MyBookshelfContainer>
    )
}

export default MyBookshelf