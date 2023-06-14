import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Input type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard contador={0} legenda="Pendentes" />
          <FiltroCard contador={0} legenda="Concluídas" />
          <FiltroCard contador={0} legenda="Urgente" />
          <FiltroCard contador={0} legenda="Importantes" />
          <FiltroCard contador={0} legenda="Normal" />
          <FiltroCard contador={0} legenda="Todas" ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
