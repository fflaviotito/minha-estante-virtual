import styled from "styled-components"
import FormInput from "./FormInput"
import { useEffect, useState } from "react"
import FormSelect from "./FormSelect"
import Button from "./Button"
import validateWishlistForm from "../utils/validateWishlistForm"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`   

const inputsForm = [
    {name: 'titulo', label: 'Título', typeInput: 'text', placeholder: 'Informe o título do livro...', required: true},
    {name: 'preco', label: 'Preço', typeInput: 'text', placeholder: 'R$79,99', required: true}
]

const initialFormData = {}
inputsForm.map(item => initialFormData[item.name] = '')
initialFormData.status = ''

const WishlistForm = ({ optionsSelectStatus, onCancel, onAddItem, onUpdateItem, editingItem }) => {

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        if (editingItem) setFormData(editingItem)
    }, [editingItem])

    const handleInputChange = (event) => {
        const {id, value} = event.target
        let formattedValue = value

        if (id === 'preco') {
            const numericValue = value.replace(/\D/g, '')

            const centavos = numericValue.padStart(3, '0');
            const reais = centavos.slice(0, -2);
            const centavosFinal = centavos.slice(-2);

            formattedValue = `R$ ${parseInt(reais)}${centavosFinal ? ',' + centavosFinal : ',00'}`;
        }

        setFormData((prev) => ({...prev, [id]: formattedValue}))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validateWishlistForm(formData)
                
        if (Object.keys(errors).length > 0) return setFormErrors(errors)

        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []

        if (editingItem) {
            const updatedWishlist = storedWishlist.map(item =>
                item.id === editingItem.id ? { ...formData } : item
            )
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
            if (onUpdateItem) onUpdateItem(updatedWishlist)
        } else {
            const newItem = { id: Date.now(), ...formData }
            const updatedWishlist = [...storedWishlist, newItem]
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
            if (onAddItem) onAddItem(newItem)
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