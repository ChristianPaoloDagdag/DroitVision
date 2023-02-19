import React from 'react';
import Partner from './Partner';
import * as S from './styles';
import Pot from '../../../assets/icons/Pot.png';

export default function ContentTwo() {
  const Services = [
    {
      icon: '../../../assets/icons/Pot.png',
      title: '满足客户多样化需求',
      subTitle:
        '通过与亚洲及本土的优秀摄影机构及个人紧密合作，正在持续不断扩大东方元素图片及影视资源',
    },
    {
      icon: Pot,
      title: '提供产品和咨询服务',
      subTitle:
        '专注于版权创意内容的传播，为本土创意人提供优质的版权产品和咨询服务，助力我国视觉版权服务市场蓬勃发展',
    },
    {
      icon: Pot,
      title: '致力于打造创作者平台',
      subTitle:
        '以技术为驱动，以服务和产品内容为核心，全身心致力于打造体贴创意人和摄影师的互联网平台',
    },
  ];

  return (
    <S.Container>
      <S.Title
        whileInView={{ opacity: 1 }}
        transition={{ duration: 5, delay: 3.5 }}
      >
        一站式正版商用素材
      </S.Title>
      <S.PartnerContainer>
        {Services.map((test, i) => (
          <S.PartnerChild
            id={test}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5, delay: 4 + i * 0.5 }}
          >
            <Partner title={test.title} subTitle={test.subTitle} />
          </S.PartnerChild>
        ))}
      </S.PartnerContainer>
    </S.Container>
  );
}
