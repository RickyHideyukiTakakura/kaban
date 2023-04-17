import React from 'react';
import * as S from './styles';

interface ISearch {
  iconFilter: React.ReactNode;
  iconSearch: React.ReactNode;
}

export function Search(props: ISearch) {
  return (
    <S.Search>
      <button type="submit">
        {props.iconFilter}
        Filtrar
      </button>
      <div>
        {props.iconSearch}
        <input
          type="text"
          placeholder="Busque por cards, assuntos ou responsáveis..."
        />
      </div>
    </S.Search>
  );
}
