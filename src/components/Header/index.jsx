import { HeaderContainer, HeaderContent, HeaderTitle, Nav } from "./Header"

import Button from "../Button"

const Header = ({setView, activeView}) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderTitle>Minha Estante Virtual</HeaderTitle>
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
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header