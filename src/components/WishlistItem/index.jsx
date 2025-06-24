import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { WishlistItemContainer, WishlistDetails, WishlistTitle, WishlistPrice, ButtonContainer } from "./styles"

import Button from '../Button'

const WishlistItem = ({ item, onDelete, onEdit }) => {
    return (
        <WishlistItemContainer>
            <WishlistDetails>
                <WishlistTitle>{item.titulo}</WishlistTitle>
                <WishlistPrice>{item.preco}</WishlistPrice>
            </WishlistDetails>
            <ButtonContainer>
                <Button onClick={onEdit} variant="primaryBookOption">
                    <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button onClick={onDelete} variant="primaryBookOption">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </ButtonContainer>
        </WishlistItemContainer>
    )
}

export default WishlistItem
