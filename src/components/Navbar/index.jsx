import React from 'react';
import Logo from '../../assets/icons/Navbar-Logo.svg';
import Button from '../Button';
import * as S from './styles';

export default function Navbar() {
  const Transition = { ease: 'easeOut', duration: 1.6 };

  const LogoAnimation = {
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    transition: Transition,
  };

  const ButtonAnimation = {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    transition: Transition,
  };

  return (
    <S.Container>
      <S.Logo
        src={Logo}
        initial={LogoAnimation.initial}
        animate={LogoAnimation.animate}
        transition={LogoAnimation.transition}
      />
      <S.CustomButton
        initial={ButtonAnimation.initial}
        animate={ButtonAnimation.animate}
        transition={ButtonAnimation.transition}
      >
        <Button />
      </S.CustomButton>
    </S.Container>
  );
}
