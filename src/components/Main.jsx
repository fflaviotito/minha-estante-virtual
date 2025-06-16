import styled from "styled-components"
import MyBookshelf from './MyBookshelf'
import MyWishlist from './MyWishlist'

const MainContainer = styled.main`
    width: 100%;
    padding: 32px 24px;
    flex: 1;
`

const Main = ({view}) => {
    return (
        <MainContainer>
            {view === 'bookcase' && <MyBookshelf />}
            {view === 'wishlist' && <MyWishlist />}
        </MainContainer>
    )
}

export default Main