import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaTarefas'
import { Container } from './styles'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
