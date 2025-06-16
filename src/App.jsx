import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {

  const [view, setView] = useState ('wishlist')

  return (
    <PageContainer>
      <GlobalStyle/>
      <Header setView={setView} activeView={view}/>
      <Main view={view}/>
      <Footer />
    </PageContainer>
  )
}

export default App
