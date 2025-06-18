import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button"

const WishlistItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const WishlistItem = ({ item, onDelete, onEdit }) => {
    return (
        <WishlistItemContainer>
            <h3>{item.titulo}</h3>
            <p>{item.preco}</p>
            <ButtonContainer>
                <Button
                    onClick={onEdit}
                    variant={'primaryBookOption'}>
                    <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button
                    onClick={onDelete}
                    variant={'primaryBookOption'}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </ButtonContainer>
        </WishlistItemContainer>
    )
}

export default WishlistItem 