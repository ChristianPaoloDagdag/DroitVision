import React from 'react';
import * as S from './styles';

export default function Partner(props) {
  const { icon, title, subTitle } = props;

  return (
    <S.Container>
      <S.Icon src={icon} />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.Container>
  );
}
