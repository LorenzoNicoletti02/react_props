// Importo l'array
import posts from './data';

// Importo il file di stile CSS
import './App.css'

// Importo i vari componenti
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

// Funzione che unisce i vari componenti in pagina
function App() {

// Array di elementi passando le proprietà dell'oggetto richiesto alla funzione
const arrayPostJsx = posts.map((curPost) => <AppMain img={curPost.image} title={curPost.title} description={curPost.content}/>)

  return (
    <>
      <AppHeader></AppHeader>
      {arrayPostJsx}
      <AppFooter></AppFooter>
    </>
  )
}

export default App
