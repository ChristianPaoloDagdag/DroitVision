import React from 'react';
import Logo from '../../assets/icons/Navbar-Logo.svg';
import Button from '../Button';
import * as S from './styles';

export default function Navbar() {
  return (
    <S.Container>
      <S.Logo src={Logo} />
      <Button />
    </S.Container>
  );
}
