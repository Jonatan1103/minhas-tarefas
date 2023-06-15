import * as S from './styles'
import Tarefa from '../../components/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'estudar typescript',
    descricao: 'Ver a aula 3 da ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'pagar fatura cartao',
    descricao: 'ver no aplicatico do banco',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'ler a biblia',
    descricao: 'Deuteronomio cap 3',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <S.Container>
    <ul>
      {tarefas.map((tarefaArray) => (
        <li key={tarefaArray.descricao}>
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

export default ListaDeTarefas
