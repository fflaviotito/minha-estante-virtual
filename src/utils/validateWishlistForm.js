const validateWishlistForm = ({ titulo, preco, status }) => {
    const errors = {}

    if (!titulo || titulo.trim() === '') {
        errors.titulo = 'O título é obrigatório.'
    } else if (titulo.trim().length > 130) {
        errors.titulo = 'O título deve ter no máximo 130 caracteres.'
    }

    if (!preco || preco.trim() === '') {
        errors.preco = 'O preço é obrigatório.'
    } else {
        const precoNormalizado = preco
            .replace('R$', '')
            .replace(/\s/g, '')
            .replace(',', '.')

        if (!/^\d+(\.\d{1,2})?$/.test(precoNormalizado)) {
            errors.preco = 'Informe um valor válido com até duas casas decimais.'
        } else {
            const valorNumerico = parseFloat(precoNormalizado)

            if (valorNumerico <= 0) {
                errors.preco = 'O preço deve ser maior que zero.'
            } else if (valorNumerico > 99999.99) {
                errors.preco = 'O preço não pode ultrapassar R$ 99.999,99.'
            }
        }
    }  

    if(!status || status === '') {
        errors.status = 'O status é obrigatório.'
    }

    return errors
}

export default validateWishlistForm