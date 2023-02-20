import React from 'react';
import Materials from './Materials';
import * as S from './styles';

export default function ContentThree() {
  return (
    <S.Container>
      <S.Title>一站式正版商用素材</S.Title>
      <S.MaterialsContainer>
        <Materials />
        <Materials />
        <Materials />
      </S.MaterialsContainer>
    </S.Container>
  );
}
