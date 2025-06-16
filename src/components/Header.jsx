import styled from "styled-components"
import Button from "./Button"

const HeaderContainer = styled.header`
    background-color: #E1DBD9;
    width: 100%;
    padding: 32px 24px;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    h1 {
        text-align: center;
    }

    @media (max-width:760px) {
        div {
            justify-content: center;
        }
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 12px 1rem;
    flex-wrap: wrap;
`

const Header = ({setView, activeView}) => {
    return (
        <HeaderContainer>
            <div>
                <h1>Minha Estante Virtual</h1>
                <Nav>
                    <Button
                        onClick={() => setView('bookcase')}
                        variant={'navigation'}
                        active={activeView === 'bookcase' ? 'active' : ''}>
                        Estante
                    </Button>
                    <Button
                        onClick={() => setView('wishlist')}
                        variant={'navigation'}
                        active={activeView === 'wishlist' ? 'active' : ''}>
                        Lista de Desejos
                    </Button>
                </Nav>
            </div>
        </HeaderContainer>
    )
}

export default Header