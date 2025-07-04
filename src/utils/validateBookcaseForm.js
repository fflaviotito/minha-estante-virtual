import isValidDate from "./isValidDate"

const validateBookcaseForm = ({ titulo, autor, genero, capa, status, paginas, paginaAtual, dataInicio, dataFim}) => {
    const errors = {}

    if (!titulo || titulo.trim() === '') {
        errors.titulo = 'O título é obrigatório.'
    } else if (titulo.trim().length > 130) {
        errors.titulo = 'O título deve ter no máximo 130 caracteres.'
    }

    if (!autor || autor.trim() === '') {
        errors.autor = 'O nome do autor é obrigatório.'
    } else if (autor.trim().length < 3) {
        errors.autor = 'O nome do autor deve ter pelo menos 3 caracteres.'
    } else if (autor.trim().length > 80) {
        errors.autor = 'O nome do autor deve ter no máximo 80 caracteres.'
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(autor.trim())) {
        errors.autor = 'O nome do autor deve conter apenas letras e espaços.'
    }

    if (!genero || genero.trim() === '') {
        errors.genero = 'O gênero é obrigatório.'
    } else if (genero.trim().length < 3) {
        errors.genero = 'O gênero deve ter pelo menos 3 caracteres.'
    } else if (genero.trim().length > 30) {
        errors.genero = 'O gênero deve ter no máximo 30 caracteres.'
    } else if (!/^[A-Za-zÀ-ÿ\s]+$/.test(genero.trim())) {
        errors.genero = 'O gênero deve conter apenas letras.'
    }
    
    if (capa) {
        const urlPattern = /^(https?:\/\/)[^\s]+$/i
        if (!urlPattern.test(capa)) errors.capa = 'Insira uma URL válida.'
    }

    if(!status || status === '') {
        errors.status = 'O status é obrigatório.'
    }

    if (paginas) {
        if (isNaN(paginas) || paginas <= 0) {
            errors.paginas = 'Informe um número válido de páginas.'
        }
    }

    if (paginaAtual) {
        if (isNaN(paginaAtual) || paginaAtual < 0) {
            errors.paginaAtual = 'Informe uma página atual válida.'
        } else if (Number(paginaAtual) > Number(paginas)) {
            {console.log(paginas, paginaAtual)}
            errors.paginaAtual = 'A página atual não pode ser maior que o total de páginas.'
        }
    }

    let inicio = null
    let fim = null

    if (dataInicio) {
        if (!isValidDate(dataInicio)) {
            errors.dataInicio = 'Data de início inválida (use DD/MM/AAAA).'
        } else {
            const [d, m, y] = dataInicio.split('/')
            inicio = new Date(`${y}-${m}-${d}`)
        }
    }

    if (dataFim) {
        if (!dataInicio) {
            errors.dataFim = 'Data de término não pode ser anterior à data de início.'
        } else {
            if (!isValidDate(dataFim)) {
                errors.dataFim = 'Data de término inválida (use DD/MM/AAAA).'
            } else {
                const [d, m, y] = dataFim.split('/')
                fim = new Date(`${y}-${m}-${d}`)

                if (inicio && fim && fim < inicio) {
                    errors.dataFim = 'Data de término não pode ser anterior à data de início.'
                }
            }
        }
    }

    return errors
}

export default validateBookcaseForm