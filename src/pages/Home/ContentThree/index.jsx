import React from 'react';
import Materials from './Materials';
import * as S from './styles';
import CreativePartner from '../../../assets/images/Creative-Partner.png';
import Butterfly from '../../../assets/images/Butterfly.png';
import Guitarist from '../../../assets/images/Guitarist.png';
import ArtBuilding from '../../../assets/images/Art-Building.png';

export default function ContentThree() {
  const MaterialsList = [
    {
      title: '创意视频',
      subtitle: [
        '日月轮回呈现海天一色，时空交错穿梭光影斑驳',
        '岁月痕迹带动时代变迁，大千世界处处人与自然',
      ],
      subtitleBottom: '这里不止及你所想，还有更多惊喜尽在其中……',
      image: CreativePartner,
    },
    {
      title: '创意图片',
      subtitle: [
        '东方面孔与西方神色，果蔬缤纷与活色生鲜',
        '世界风貌与中国传统，城市地标与旷野大道',
        '体育竞技与文化艺术，商业发展与百姓人家',
      ],
      subtitleBottom: '民族与世界在这里尽收眼底……',
      image: Butterfly,
    },
    {
      title: '音乐素材',
      subtitle: [
        '美妙旋律让你身临其境，顿挫节奏激活每个神经',
        '丰富情绪带入内心世界, 万千变化风格中总有属于你的BGM',
      ],
      image: Guitarist,
    },
    {
      title: '矢量素材',
      subtitle: [
        '东方面孔与西方神色，果蔬缤纷与活色生鲜',
        '世界风貌与中国传统，城市地标与旷野大道',
        '体育竞技与文化艺术，商业发展与百姓人家',
      ],
      subtitleBottom: '民族与世界在这里尽收眼底……',
      image: ArtBuilding,
    },
  ];

  const TitleTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 5 },
    viewport: { once: true },
  };

  const MaterialsMap = MaterialsList.map((material, index) => (
    <Materials
      title={material.title}
      key={material.title}
      order={index % 2}
      subtitle={material.subtitle}
      subtitleBottom={material.subtitleBottom}
      image={material.image}
    />
  ));

  return (
    <S.Container>
      <S.Title
        initial={TitleTransition.initial}
        whileInView={TitleTransition.whileInView}
        transition={TitleTransition.transition}
        viewport={TitleTransition.viewport}
      >
        一站式正版商用素材
      </S.Title>
      <S.MaterialsContainer>{MaterialsMap}</S.MaterialsContainer>
    </S.Container>
  );
}
