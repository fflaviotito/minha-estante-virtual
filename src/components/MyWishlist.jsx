import styled from "styled-components"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button"
import SearchInput from "./SearchInput"
import WishlistItem from "./WishlistItem"

const MyWishlistContainer = styled.section`
    max-width: 1200px;
    margin: 0 auto;
`

const ListHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
`

const List = styled.div`
    margin-top: 16px;
`

const MyWishlist = () => {

    const [search, setSearch] = useState('')

    return (
        <MyWishlistContainer>
            <ListHeader>
                <h2>Minha Lista de Desejos</h2>
                <Button
                    onClick={() => console.log('adicionando...')}
                    variant={'primaryBookOption'}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </ListHeader>
            <SearchInput
                type={'search'}
                placeholder={'Buscar livro...'}
                onChange={valor => setSearch(valor)}
            />
            <List>
                <WishlistItem />
            </List>
        </MyWishlistContainer>
    )
}

export default MyWishlist