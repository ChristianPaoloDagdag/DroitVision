import React from 'react';
import Partner from './Partner';
import * as S from './styles';

export default function ContentTwo() {
  return (
    <S.Container>
      <S.Title>全球客户新生合作伙伴</S.Title>
      <S.PartnerContainer>
        <Partner />
        <Partner />
        <Partner />
      </S.PartnerContainer>
    </S.Container>
  );
}
