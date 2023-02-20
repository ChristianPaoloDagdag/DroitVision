import React from 'react';
import * as S from './styles';

export default function Materials(props) {
  const {
    title, subtitle, subtitleBottom, image, order,
  } = props;

  const subtitleMap = subtitle.map((text) => <div key={text}>{text}</div>);

  const ImageTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, y: -50 },
    transition: { ease: 'easeOut', duration: 3 },
    viewport: { once: 'true' },
  };

  return (
    <S.Container className={`_${order}`}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>
          {subtitleMap}
          <S.SubTitleBottom>{subtitleBottom}</S.SubTitleBottom>
        </S.SubTitle>
      </S.Content>
      <S.Image
        src={image}
        initial={ImageTransition.initial}
        whileInView={ImageTransition.whileInView}
        animate={ImageTransition.animate}
        transition={ImageTransition.transition}
        viewport={ImageTransition.viewport}
      />
    </S.Container>
  );
}
