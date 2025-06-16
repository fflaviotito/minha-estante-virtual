import styled from "styled-components"
import { useEffect, useState } from "react"
import FormInput from "./FormInput"
import Button from "./Button"
import FormSelect from "./FormSelect"
import validateBookshelfForm from "../utils/validateBookshelfForm"

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
`

const StatusContainer = styled.div`
    margin-bottom: 8px;
`

const ProgressContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    gap: 8px;
    margin-bottom: 8px;
`

const TimeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    gap: 8px;
    margin-bottom: 8px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const inputInfo = [
    {name: 'titulo', label: 'Título', typeInput: 'text', placeholder: 'Informe o título do livro...', required: true},
    {name: 'autor', label: 'Autor', typeInput: 'text', placeholder: 'Informe o autor do livro...', required: true},
    {name: 'genero', label: 'Gênero', typeInput: 'text', placeholder: 'Informe o gênero do livro...', required: true},
    {name: 'capa', label: 'Capa', typeInput: 'text', placeholder: 'https://exemplo.com/imagem-da-capa.jpg', required: false}
]

const inputProgress = [
    {name: 'paginas', label: 'Total de páginas', typeInput: 'text', placeholder: 'Ex: 430', required: false},
    {name: 'paginaAtual', label: 'Página atual', typeInput: 'text', placeholder: 'Ex: 184', required: false}
]

const inputTime = [
    {name: 'dataInicio', label: 'Data de inicio', typeInput: 'text', placeholder: 'Ex: 11/02/2025', required: false},
    {name: 'dataFim', label: 'Data de término', typeInput: 'text', placeholder: 'Ex: 06/06/2025', required: false}
]

const initialFormData = {}
inputInfo.map(item => initialFormData[item.name] = '')
inputProgress.map(item => initialFormData[item.name] = '')
inputTime.map(item => initialFormData[item.name] = '')
initialFormData.status = ''

const BookshelfForm = ({ optionsSelectStatus, onAddBook, editingBook, onUpdateBook, onCancel }) => {

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        if (editingBook) setFormData(editingBook)
    }, [editingBook])

    const handleInputChange = (event) => {
        const {id, value} = event.target
        let formattedValue = value

        if (id === 'titulo') formattedValue = value.slice(0,130)

        if (id === 'autor') formattedValue = value.slice(0, 80)

        if (id === 'genero') formattedValue = value.slice(0,30)

        if (id === 'paginas' || id === 'paginaAtual') {
            formattedValue = value.replace(/\D/g, '')
        }

        if (id === 'dataInicio' || id === 'dataFim') {
            formattedValue = value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '$1/$2')
                .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
                .slice(0, 10); 
        }

        setFormData((prev) => ({...prev, [id]: formattedValue}))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validateBookshelfForm(formData)
        
        if (Object.keys(errors).length > 0) return setFormErrors(errors)
        
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || []
        
        if (editingBook) {
            const updatedBooks = storedBooks.map(book =>
                book.id === editingBook.id ? { ...formData } : book
            )
            localStorage.setItem('bookshelf', JSON.stringify(updatedBooks))
            if (onUpdateBook) onUpdateBook(updatedBooks)
        } else {
            const newBook = { id: Date.now(), ...formData }
            const updatedBooks = [...storedBooks, newBook]
            localStorage.setItem('bookshelf', JSON.stringify(updatedBooks))
            if (onAddBook) onAddBook(newBook)
        }
        setFormData(initialFormData)
        setFormErrors({})
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InfoContainer>
                {inputInfo.map(item => <FormInput
                    key={item.name}
                    name={item.name}
                    value={formData[item.name]}
                    label={item.label}
                    typeInput={item.typeInput}
                    placeholder={item.placeholder}
                    required={item.required}
                    onChange={handleInputChange}
                    error={formErrors[item.name]}
                />)}
            </InfoContainer>
            <StatusContainer>
                <FormSelect
                    name={'status'}
                    label={'Status'}
                    value={formData.status}
                    options={optionsSelectStatus}
                    onChange={handleInputChange}
                    required={true}
                    error={formErrors.status}
                />
            </StatusContainer>
            <ProgressContainer>
                {inputProgress.map(item => <FormInput
                    key={item.name}
                    name={item.name}
                    value={formData[item.name]}
                    label={item.label}
                    typeInput={item.typeInput}
                    placeholder={item.placeholder}
                    required={item.required}
                    onChange={handleInputChange}
                    error={formErrors[item.name]}
                />)}
            </ProgressContainer>
            <TimeContainer>
                {inputTime.map(item => <FormInput
                    key={item.name}
                    name={item.name}
                    value={formData[item.name]}
                    label={item.label}
                    typeInput={item.typeInput}
                    placeholder={item.placeholder}
                    required={item.required}
                    onChange={handleInputChange}
                    error={formErrors[item.name]}
                />)}
            </TimeContainer>
            <ButtonContainer>
                <Button>Salvar</Button>
                <Button onClick={onCancel}>Cancelar</Button>
            </ButtonContainer>
        </Form>
    )
}

export default BookshelfForm