import React from 'react';
import * as S from './styles';
import Pot from '../../../../assets/icons/Pot.png';

export default function Partner() {
  return (
    <S.Container>
      <S.Icon src={Pot} />
      <S.Title>致力于打造创作者平台</S.Title>
      <S.SubTitle>
        以技术为驱动，以服务和产品内容为核心，全身心致力于打造体贴创意人和摄影师的互联网平台
      </S.SubTitle>
    </S.Container>
  );
}
