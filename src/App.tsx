import { ThemeProvider } from 'styled-components'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { ListProjects } from './components/ListProjects'
import { Skills } from './components/Skills'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <About />
      <Skills />
      <ListProjects />
      <Contact />
      <GlobalStyle />
    </ThemeProvider>
  )
}