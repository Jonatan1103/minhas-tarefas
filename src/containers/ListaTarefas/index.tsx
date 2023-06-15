import * as S from './styles'
import Tarefa from '../../components/Tarefa'

const tarefas = [
  {
    titulo: 'estudar typescript',
    descricao: 'Ver a aula 3 da ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'pagar fatura cartao',
    descricao: 'ver no aplicatico do banco',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'ler a biblia',
    descricao: 'Deuteronomio cap 3',
    prioridade: 'importante',
    status: 'pendente'
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
