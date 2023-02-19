import React from 'react';
import Logo from '../../assets/icons/Navbar-Logo.svg';
import Button from '../Button';
import * as S from './styles';

export default function Navbar() {
  const Transition = { ease: 'easeOut', duration: 1.6 };

  const LogoAnimation = {
    animate: { x: 300 },
    transition: Transition,
  };

  const ButtonAnimation = {
    animate: { x: -300 },
    transition: Transition,
  };

  return (
    <S.Container>
      <S.Logo src={Logo} animate={LogoAnimation.animate} transition={LogoAnimation.transition} />
      <S.CustomButton animate={ButtonAnimation.animate} transition={ButtonAnimation.transition}>
        <Button />
      </S.CustomButton>
    </S.Container>
  );
}
