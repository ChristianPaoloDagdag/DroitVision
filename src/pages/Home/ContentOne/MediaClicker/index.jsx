import React from 'react';
import * as S from './styles';

export default function MediaClicker(props) {
  const { icon } = props;

  const ContainerAnimation = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 1.0 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  return (
    <S.Container
      whileHover={ContainerAnimation.whileHover}
      whileTap={ContainerAnimation.whileTap}
      transition={ContainerAnimation.transition}
    >
      <S.Icon src={icon} />
      <S.Text>精选音乐</S.Text>
    </S.Container>
  );
}
