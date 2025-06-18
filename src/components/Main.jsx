import styled from "styled-components"
import { useState } from "react"
import MyBookshelf from './MyBookshelf'
import MyWishlist from './MyWishlist'

const MainContainer = styled.main`
    width: 100%;
    padding: 32px 24px;
    flex: 1;
`

const Main = ({view}) => {
    
    const [search, setSearch] = useState('')

    return (
        <MainContainer>
            {view === 'bookcase' &&
                <MyBookshelf 
                    onChangeSearch={valor => setSearch(valor)}
                    search={search}
                />
            }
            {view === 'wishlist' &&
                <MyWishlist
                    onChangeSearch={valor => setSearch(valor)}
                    search={search}
                />
            }
        </MainContainer>
    )
}

export default Main