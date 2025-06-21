import { useEffect, useState } from "react"

const useStorageList = (storageKey, filter, search) => {
    const [list, setList] = useState([])
    const [editingItem, setEditingItem] = useState(null)

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(storageKey)) || []
        setList(stored)
    }, [storageKey])

    const saveToStorage = (updatedList) => {
        setList(updatedList)
        localStorage.setItem(storageKey, JSON.stringify(updatedList))
    }

    const addItem = (newItem) => {
        const updatedList = [...list, newItem]
        saveToStorage(updatedList)
    }

    const updateItem = (updateItem) => {
        const updatedList = list.map(item => item.id === updateItem.id ? updateItem : item)
        saveToStorage(updatedList)
    }

    const deleteItem = (id) => {
        const updatedList = list.filter(item => item.id !== id)
        saveToStorage(updatedList)
    }

    const clearEditing = () => {
        setEditingItem(null)
    }

    const filteredList = list
        .filter(item => filter === 'Todos' || item.status === filter)
        .filter(item => !search ||
            item.titulo.toLowerCase().includes(search.toLowerCase()) ||
            item.autor.toLowerCase().includes(search.toLowerCase()) ||
            item.genero.toLowerCase().includes(search.toLowerCase())
        )

    return {
        list,
        addItem,
        updateItem,
        deleteItem,
        editingItem,
        setEditingItem,
        clearEditing,
        filteredList
    }
}

export default useStorageList