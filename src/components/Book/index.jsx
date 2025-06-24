import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { BookContainer, LeftContainer, BookImage, Checkbox, OptionsButtonOverlay, BookDetails, BookInfoTitles, BookInfoCategory } from "./styles"

import defaultBook from '../../assets/images/default-book.png'
import OptionsMenu from "../OptionsMenu"
import ProgressBar from "../ProgressBar"

const Book = ({ item, onDelete, onEdit }) => {

    const [showMenu, setShowMenu] = useState(false)

    const iconMoreOptions = <FontAwesomeIcon icon={faEllipsisVertical} />
    const iconEdit = <FontAwesomeIcon icon={faPen} />
    const iconRemove = <FontAwesomeIcon icon={faTrash} />
    const actionOptions = [
        { name: 'Editar', icon: iconEdit, variant: 'secondaryBookOption', onClick: onEdit },
        { name: 'Excluir', icon: iconRemove, variant: 'secondaryBookOption', onClick: onDelete }
    ]

    const handleSelect = (option) => {
        if (option.onClick) option.onClick()
        setShowMenu(!showMenu)
    }

    const calcPercent = (paginaAtual, paginas) => {
        return paginaAtual === '' && paginas === '' ? 0 : parseInt(paginaAtual * 100 / paginas)
    }

    return (
        <BookContainer>
            <LeftContainer>
                <BookImage
                    src={item.capa || defaultBook}
                    alt={`Capa do livro: ${item.titulo}`}
                />
                <Checkbox
                    type="checkbox"
                />
                <OptionsButtonOverlay>
                    <OptionsMenu
                        mainButton={{icon: iconMoreOptions, variant: 'primaryBookOption'}}
                        options={actionOptions}
                        showMenu={showMenu}
                        toggleMenu={() => setShowMenu(!showMenu)}
                        onSelect={handleSelect}
                    />
                </OptionsButtonOverlay>
            </LeftContainer>
            <BookDetails>
                <BookInfoTitles>
                    <h3>{item.titulo}</h3>
                    <p>{item.autor}</p>
                </BookInfoTitles>
                <BookInfoCategory>
                    <p>{item.genero}</p>
                    <p>{item.status}</p>
                </BookInfoCategory>
                <ProgressBar percent={calcPercent(item.paginaAtual, item.paginas)}/>
            </BookDetails>
        </BookContainer>
        
    )
}

export default Book