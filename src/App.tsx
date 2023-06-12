import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaTarefas'
import { Container } from './styles'

const App = () => {
  return (
    <Container>
      <BarraLateral />
      <ListaDeTarefas />
    </Container>
  )
}

export default App
