import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

export default function Materials(props) {
  const {
    title, subtitle, subtitleBottom, image, order,
  } = props;

  const ImageTransition = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { ease: 'easeOut', duration: 3 },
    viewport: { once: 'true' },
  };

  const TitleTransition = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { ease: 'easeOut', duration: 3, delay: 0.6 },
    viewport: { once: 'true' },
  };

  const PartnerTransition = {
    initial: { opacity: 0, translateY: 50 },
    whileInView: { opacity: 1, translateY: 0 },
  };

  const subtitleMap = subtitle.map((text, index) => (
    <motion.div
      initial={PartnerTransition.initial}
      whileInView={PartnerTransition.whileInView}
      transition={{ duration: 1.5, delay: 1.2 + index * 0.8 }}
      key={text}
    >
      {text}
    </motion.div>
  ));

  return (
    <S.Container className={`_${order}`}>
      <S.Content>
        <S.Title
          initial={TitleTransition.initial}
          whileInView={TitleTransition.whileInView}
          animate={TitleTransition.animate}
          transition={TitleTransition.transition}
          viewport={TitleTransition.viewport}
        >
          {title}
        </S.Title>
        <S.SubTitle>
          {subtitleMap}
          <S.SubTitleBottom
            initial={PartnerTransition.initial}
            whileInView={PartnerTransition.whileInView}
            transition={{ duration: 1.5, delay: 1.8 + subtitle.length * 0.8 }}
          >
            {subtitleBottom}
          </S.SubTitleBottom>
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
