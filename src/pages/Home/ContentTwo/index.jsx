import React from 'react';
import { motion } from 'framer-motion';
import Partner from './Partner';
import * as S from './styles';
import Pot from '../../../assets/icons/Pot.png';
import Give from '../../../assets/icons/Give.png';
import Shapes from '../../../assets/icons/Shapes.png';

export default function ContentTwo() {
  const Services = [
    {
      icon: Shapes,
      title: '满足客户多样化需求',
      subTitle:
        '通过与亚洲及本土的优秀摄影机构及个人紧密合作，正在持续不断扩大东方元素图片及影视资源',
    },
    {
      icon: Give,
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

  const TitleTransition = {
    whileInView: { opacity: 1 },
    transition: { duration: 5, delay: 3.5 },
    viewport: { once: true },
  };

  const PartnerTransition = {
    initial: { opacity: 0, translateY: -50 },
    animate: { opacity: 1, translateY: 0 },
  };

  const ServiceMap = Services.map((service, index) => (
    <motion.div
      id={service}
      key={service.title}
      initial={PartnerTransition.initial}
      animate={PartnerTransition.animate}
      transition={{ duration: 1.5, delay: 4 + index * 0.5 }}
    >
      <Partner
        order={index}
        icon={service.icon}
        title={service.title}
        subTitle={service.subTitle}
      />
    </motion.div>
  ));

  return (
    <S.Container>
      <S.Title
        whileInView={TitleTransition.whileInView}
        transition={TitleTransition.transition}
        viewport={TitleTransition.viewport}
      >
        一站式正版商用素材
      </S.Title>
      <S.PartnerContainer>{ServiceMap}</S.PartnerContainer>
    </S.Container>
  );
}
