import React from 'react';
import ArrowForward from '../../assets/icons/Arrow-Forward.png';
import * as S from './styles';

export default function Button() {
  return (
    <S.CustomButton>
      <S.ArrowForward src={ArrowForward} />
      <S.Text>立即进入</S.Text>
    </S.CustomButton>
  );
}
