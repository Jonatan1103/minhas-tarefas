import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      1,
      'Ler a Bíblia',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Deuteronomio 4'
    ),
    new Tarefa(
      2,
      'Estudar',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'inscrever no curso de Farmacia'
    ),
    new Tarefa(
      3,
      'Pagar as contas',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'boleto internet'
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
