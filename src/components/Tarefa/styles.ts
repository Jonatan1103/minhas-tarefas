import styled from 'styled-components'
import variaveisCor from '../../styles/variaveisCor'
import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

const retornaCorDeFundo = (props: TagProps): string => {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) {
      return variaveisCor.amarelo
    }

    if (props.status === enums.Status.CONCLUIDA) {
      return variaveisCor.verde
    }
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE) {
      return variaveisCor.vermelho
    }

    if (props.prioridade === enums.Prioridade.IMPORTANTE) {
      return variaveisCor.laranja
    }
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  display: block;
  width: 100%;
  margin: 16px 0;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveisCor.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveisCor.vermelho};
`
