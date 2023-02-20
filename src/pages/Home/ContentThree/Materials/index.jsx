import React from 'react';
import * as S from './styles';

export default function Materials(props) {
  const {
    title, subtitle, subtitleBottom, image, order,
  } = props;

  const subtitleMap = subtitle.map((text) => <div key={text}>{text}</div>);
  return (
    <S.Container className={`_${order}`}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>
          {subtitleMap}
          <S.SubTitleBottom>{subtitleBottom}</S.SubTitleBottom>
        </S.SubTitle>
      </S.Content>
      <S.Image src={image} />
    </S.Container>
  );
}
