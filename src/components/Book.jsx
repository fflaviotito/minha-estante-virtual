import styled from "styled-components"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import OptionsMenu from "./OptionsMenu"
import ProgressBar from "./ProgressBar"

const BookContianer = styled.div`
    display: inline-flex;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    background-color: brown;
`

const LeftContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 140px;
    overflow: hidden;
`

const BookImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Checkbox = styled.input`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 15px;
    height: 15px;
`;

const OptionsButtonOverlay = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
`;

const RightContainer = styled.div`
    width: 100%;
    padding: 8px;
    overflow: hidden;
`

const BookInfoTitles = styled.div`
    margin-bottom: 12px;
`

const BookInfoCategory = styled.div`
    margin-bottom: 12px;
`

const BookInfoProgress = styled.div`

`

const calcPercent = (paginaAtual, paginas) => {
    return paginaAtual === '' && paginas === '' ? 0 : parseInt(paginaAtual * 100 / paginas)
}

const Book = ({ item, onDelete, onEdit }) => {

    const [showMenu, setShowMenu] = useState(false)

    const iconMoreOptions = <FontAwesomeIcon icon={faEllipsisVertical} />
    const iconEdit = <FontAwesomeIcon icon={faPen} />
    const iconRemove = <FontAwesomeIcon icon={faTrash} />

    const actionOptions = [
        {
            name: 'Editar',
            icon: iconEdit,
            variant: 'secondaryBookOption',
            onClick: onEdit
        },
        {
            name: 'Excluir',
            icon: iconRemove,
            variant: 'secondaryBookOption',
            onClick: onDelete
        }
    ]

    const handleSelect = (option) => {
        if (option.onClick) option.onClick()
        setShowMenu(!showMenu)
    }

    return (
        <BookContianer>
            <LeftContainer>
                <BookImage
                    src={item.capa === '' ? '#' : item.capa}
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
            <RightContainer>
                <BookInfoTitles>
                    <h3>{item.titulo}</h3>
                    <p>{item.autor}</p>
                </BookInfoTitles>
                <BookInfoCategory>
                    <p>{item.genero}</p>
                    <p>{item.status}</p>
                </BookInfoCategory>
                <BookInfoProgress>
                    <ProgressBar percent={calcPercent(item.paginaAtual, item.paginas)}/>
                </BookInfoProgress>
            </RightContainer>
        </BookContianer>
        
    )
}

export default Book