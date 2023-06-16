import { useSelector } from 'react-redux'

import * as S from './styles'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas)

  return (
    <S.Container>
      <p>2 tarefas marcadas como categoria e termo</p>
      <ul>
        {tarefas.map((tarefaArray) => (
          <li key={tarefaArray.id}>
            <Tarefa
              descricao={tarefaArray.descricao}
              prioridade={tarefaArray.prioridade}
              status={tarefaArray.status}
              titulo={tarefaArray.titulo}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas
