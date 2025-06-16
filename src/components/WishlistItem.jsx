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

const WishlistItem = () => {
    return (
        <WishlistItemContainer>
            <h3>Os Intrumentos Morais: Cidade de Vidro</h3>
            <p>R$100,00</p>
            <ButtonContainer>
                <Button
                    onClick={() => console.log('editando...')}
                    variant={'primaryBookOption'}>
                    <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button
                    onClick={() => console.log('excluindo...')}
                    variant={'primaryBookOption'}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </ButtonContainer>
        </WishlistItemContainer>
    )
}

export default WishlistItem 