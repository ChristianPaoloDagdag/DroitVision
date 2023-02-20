import React from 'react';
import * as S from './styles';
import CreativePartner from '../../../../assets/images/Creative-Partner.png';

export default function Materials() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>创意视频</S.Title>
        <S.SubTitle>
          <div>日月轮回呈现海天一色，时空交错穿梭光影斑驳</div>
          <div>岁月痕迹带动时代变迁，大千世界处处人与自然</div>
          <S.SubTitleBottom>
            这里不止及你所想，还有更多惊喜尽在其中……
          </S.SubTitleBottom>
        </S.SubTitle>
      </S.Content>
      <S.Image src={CreativePartner} />
    </S.Container>
  );
}
