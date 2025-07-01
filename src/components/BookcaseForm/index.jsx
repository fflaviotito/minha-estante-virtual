import validateBookcaseForm from "../../utils/validateBookcaseForm"
import useFormHandlers from "../../hooks/useFormHandlers"

import { Form, InfoContainer, StatusContainer, ProgressContainer, TimeContainer, ButtonContainer } from "./styles"

import FormInput from "../FormInput"
import Button from "../Button"
import FormSelect from "../FormSelect"

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

const allInputs = [...inputInfo, ...inputProgress, ...inputTime]
const initialFormData = allInputs.reduce((acc, item) => {
    acc[item.name] = ''
    return acc
}, { status: '' })

const BookshelfForm = ({ optionsSelectStatus, onAdd, editingItem, onUpdate, onCancel }) => {

    const {
        formData,
        formErrors,
        handleInputChange,
        handleSubmit,
        handleCancel
    } = useFormHandlers(initialFormData, validateBookcaseForm, onAdd, onUpdate, onCancel, editingItem)

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
                <Button variant={'form'}>Salvar</Button>
                <Button onClick={handleCancel} variant={'form'}>Cancelar</Button>
            </ButtonContainer>
        </Form>
    )
}

export default BookshelfForm