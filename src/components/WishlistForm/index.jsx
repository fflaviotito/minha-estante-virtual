import { useEffect, useState } from "react"
import formatInputValue from "../../utils/formatInputValue" 
import validateWishlistForm from "../../utils/validateWishlistForm"

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

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        if (editingItem) setFormData({ ...initialFormData, ...editingItem })
    }, [editingItem])

    const handleInputChange = (event) => {
        const {id, value} = event.target
        const formattedValue = formatInputValue(id, value)
        setFormData((prev) => ({...prev, [id]: formattedValue}))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validateWishlistForm(formData)
                
        if (Object.keys(errors).length > 0) return setFormErrors(errors)

        if (editingItem) {
            const updatedWishlist = { ...formData, id: editingItem.id}
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
            onUpdate(updatedWishlist)
        } else {
            const newItem = { id: Date.now(), ...formData }
            onAdd(newItem)
        }   

        setFormData(initialFormData)
        setFormErrors({})
    }

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
                <Button onClick={onCancel}>Cancelar</Button>
            </ButtonContainer>
        </Form>
    )
}

export default WishlistForm