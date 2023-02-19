import React from 'react';
import Button from '../Button';
import * as S from './styles';

export default function Footer() {
  return (
    <S.Container>
      <S.Title>创意合作伙伴</S.Title>
      <S.SubTitle>
        该网站素材和服务均由卓特视觉提供支持，与曲多多无关
      </S.SubTitle>
      <Button />
    </S.Container>
  );
}
