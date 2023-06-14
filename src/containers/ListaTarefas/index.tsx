import * as S from './styles'
import Tarefa from '../../components/Tarefa'

const ListaDeTarefas = () => (
  <S.Container>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </S.Container>
)

export default ListaDeTarefas
