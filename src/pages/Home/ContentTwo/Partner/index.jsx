import React from 'react';
import * as S from './styles';

export default function Partner(props) {
  const {
    icon, title, subTitle, order,
  } = props;

  const ContainerAnimation = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 1.0 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  return (
    <S.Container
      whileHover={ContainerAnimation.whileHover}
      transition={ContainerAnimation.transition}
      className={`_${order}`}
    >
      <S.Icon src={icon} />
      <S.Title className={`_${order}`}>{title}</S.Title>
      <S.SubTitle className={`_${order}`}>{subTitle}</S.SubTitle>
    </S.Container>
  );
}
