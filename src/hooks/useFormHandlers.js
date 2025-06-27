import { useEffect, useState } from "react"
import formatInputValue from "../utils/formatInputValue"

const useFormHandlers = (initialFormData, validateForm, onAdd, onUpdate, onCancel, editingItem) => {
    const [formData, setFormData] = useState(initialFormData)
    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        if (editingItem) setFormData({ ...initialFormData, ...editingItem })
    }, [editingItem])

    const handleInputChange = (event) => {
        const { id, value } = event.target
        const formattedValue = formatInputValue(id, value)
        setFormData((prev) => ({ ...prev, [id]: formattedValue }))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validateForm(formData)
        
        if (Object.keys(errors).length > 0) return setFormErrors(errors)
        
        if (editingItem) {
            const updateItem = { ...formData, id: editingItem.id}
            onUpdate(updateItem)
        } else {
            const newItem = { id: Date.now(), ...formData }
            onAdd(newItem)
        }

        setFormData(initialFormData)
        setFormErrors({})
    }

    const handleCancel = (event) => {
        event.preventDefault()
        onCancel()
    }

    return {
        formData,
        setFormData,
        formErrors,
        handleInputChange,
        handleSubmit,
        handleCancel
    }
}

export default useFormHandlers