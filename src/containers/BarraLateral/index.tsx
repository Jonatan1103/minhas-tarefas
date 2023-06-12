import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Input type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard />
          <FiltroCard ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
