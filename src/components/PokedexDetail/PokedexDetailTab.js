import React from 'react';
import { PokedexDetailTabStyles as S } from '@components/PokedexDetail/index';
import { object, string } from 'prop-types';

const PokedexDetailTab = ({ data, type }) => {
  return (
    <S.Container>
      {data.map((item, index) => {
        if (type === 'stats') {
          return (
            <S.TitleTxt key={index}>
              - {item.stat.name + '-> ' + item.base_stat}
            </S.TitleTxt>
          );
        }
        return <S.TitleTxt key={index}>- {item[type].name}</S.TitleTxt>;
      })}
    </S.Container>
  );
};

PokedexDetailTab.propTypes = {
  data: object.isRequired,
  type: string.isRequired,
};

export default PokedexDetailTab;
