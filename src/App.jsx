import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/globalStyle"
import { PageContainer } from "./styles/app"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer.jsx"

function App() {

  const [view, setView] = useState ('bookcase')

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <GlobalStyle />
        <Header setView={setView} activeView={view} />
        <Main view={view} />
        <Footer />
      </PageContainer>
    </ThemeProvider >
  )
}

export default App
