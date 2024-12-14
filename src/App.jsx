// Importo il file di stile CSS
import './App.css'

// Importo i vari componenti
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

// Funzione che unisce i vari componenti in pagina
function App() {

  return (
    <>
      <AppHeader></AppHeader>
      <AppMain></AppMain>
      <AppFooter></AppFooter>
    </>
  )
}

export default App
