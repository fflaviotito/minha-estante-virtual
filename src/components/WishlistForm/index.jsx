import validateWishlistForm from "../../utils/validateWishlistForm"
import useFormHandlers from "../../hooks/useFormHandlers"

import { Form, ButtonContainer } from "./styles"

import FormInput from "../FormInput"
import FormSelect from "../FormSelect"
import Button from "../Button"

const inputsForm = [
    {name: 'titulo', label: 'Título', typeInput: 'text', placeholder: 'Informe o título do livro...', required: true},
    {name: 'preco', label: 'Preço', typeInput: 'text', placeholder: 'R$79,99', required: true}
]

const initialFormData = inputsForm.reduce((acc, item) => {
    acc[item.name] = ''
    return acc
}, { status: '' })

const WishlistForm = ({ optionsSelectStatus, onCancel, onAdd, onUpdate, editingItem }) => {

    const {
        formData,
        formErrors,
        handleInputChange,
        handleSubmit,
        handleCancel
    } = useFormHandlers(initialFormData, validateWishlistForm, onAdd, onUpdate, onCancel, editingItem)

    return (
        <Form onSubmit={handleSubmit}>
            {inputsForm.map(item => <FormInput
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
            <FormSelect
                name={'status'}
                label={'Status'}
                value={formData.status}
                options={optionsSelectStatus}
                onChange={handleInputChange}
                required={true}
                error={formErrors.status}
            />
            <ButtonContainer>
                <Button>Salvar</Button>
                <Button onClick={handleCancel}>Cancelar</Button>
            </ButtonContainer>
        </Form>
    )
}

export default WishlistForm