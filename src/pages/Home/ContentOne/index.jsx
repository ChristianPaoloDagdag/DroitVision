import React from 'react';
import * as S from './styles';

export default function ContentOne() {
  const PulseAnimate = {
    scale: [1, 1.1, 1],
  };

  const PulseTransition = {
    ease: 'linear',
    repeat: Infinity,
    repeatDelay: Math.floor(Math.random() * (10 - 5 + 1) + 5),
    stiffness: 10,
    velocity: 0.1,
  };

  return (
    <S.Container>
      <S.Yellow animate={PulseAnimate} transition={PulseTransition} />
      <S.Blue animate={PulseAnimate} transition={PulseTransition} />
    </S.Container>
  );
}
