import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import * as S from './styles';
import RandomCompoenent from './RandomComponent';

export default function Footer() {
  const TitleTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 5, delay: 0.6 },
    viewport: { once: true },
  };

  const SubTitleTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 3, delay: 1.2 },
    viewport: { once: true },
  };

  const ButtonTransition = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 3, delay: 1.8 },
    viewport: { once: true },
  };

  return (
    <S.Container>
      <S.Title
        initial={TitleTransition.initial}
        whileInView={TitleTransition.whileInView}
        transition={TitleTransition.transition}
        viewport={TitleTransition.viewport}
      >
        创意合作伙伴
      </S.Title>
      <S.SubTitle
        initial={SubTitleTransition.initial}
        whileInView={SubTitleTransition.whileInView}
        transition={SubTitleTransition.transition}
        viewport={SubTitleTransition.viewport}
      >
        该网站素材和服务均由卓特视觉提供支持，与曲多多无关
      </S.SubTitle>
      <motion.div
        initial={ButtonTransition.initial}
        whileInView={ButtonTransition.whileInView}
        transition={ButtonTransition.transition}
        viewport={ButtonTransition.viewport}
      >
        <Button />
        { 1 + 2 }
        <RandomCompoenent randomProps="paopaopaopao" randomPropsTwo="Dagdagdagdagdagdagdag" />
        <RandomCompoenent randomProps="markmarkmarikarmiarmkam" randomPropsTwo="Dagdagdagdagdagdagdag" />
      </motion.div>
    </S.Container>
  );
}
