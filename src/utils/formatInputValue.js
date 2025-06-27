const formatInputValue = (id, value) => {
    if (id === 'titulo') return value.slice(0,130)

    if (id === 'autor') return value.slice(0, 80)

    if (id === 'genero') return value.slice(0,30)

    if (id === 'paginas' || id === 'paginaAtual') {
        return value.replace(/\D/g, '')
    }

    if (id === 'dataInicio' || id === 'dataFim') {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1/$2')
            .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
            .slice(0, 10); 
    }

    if (id === 'preco') {
        const numericValue = value.replace(/\D/g, '')

        const centavos = numericValue.padStart(3, '0')
        const reais = centavos.slice(0, -2)
        const centavosFinal = centavos.slice(-2)

        return `R$ ${parseInt(reais)}${centavosFinal ? ',' + centavosFinal : ',00'}`
    }

    return value
}

export default formatInputValue