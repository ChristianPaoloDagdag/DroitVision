import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import * as S from './styles';

export default function Footer() {
  const TitleTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 3 },
  };

  const SubTitleTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 3, delay: 0.6 },
  };

  const ButtonTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 3, delay: 1.2 },
  };

  return (
    <S.Container>
      <S.Title
        initial={TitleTransition.initial}
        whileInView={TitleTransition.whileInView}
        transition={TitleTransition.transition}
      >
        创意合作伙伴
      </S.Title>
      <S.SubTitle
        initial={SubTitleTransition.initial}
        whileInView={SubTitleTransition.whileInView}
        transition={SubTitleTransition.transition}
      >
        该网站素材和服务均由卓特视觉提供支持，与曲多多无关
      </S.SubTitle>
      <motion.div
        initial={ButtonTransition.initial}
        whileInView={ButtonTransition.whileInView}
        transition={ButtonTransition.transition}
      >
        <Button />
      </motion.div>
    </S.Container>
  );
}
