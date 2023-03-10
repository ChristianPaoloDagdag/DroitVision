import React from 'react';
import MediaClicker from './MediaClicker';
import * as S from './styles';
import FeaturedMusic from '../../../assets/icons/Featured-Music.png';
import CommercialImage from '../../../assets/icons/Commercial-Image.png';
import CreativeVideo from '../../../assets/icons/Creative-Video.png';

export default function ContentOne() {
  const PulseAnimate = {
    scale: [1, 1.1, 1],
  };

  const PulseTransition = {
    ease: 'linear',
    repeat: Infinity,
    repeatDelay: Math.floor(Math.random() * (10 - 5 + 1) + 5),
    stiffness: 10,
    velocity: 0.1,
  };

  const TitleTransition = {
    animate: { y: -50, opacity: 1 },
    transition: { ease: 'easeOut', duration: 2 },
  };

  const SubTitleTransition = {
    animate: { y: -50, opacity: 1 },
    transition: { ease: 'easeOut', duration: 2, delay: 0.8 },
  };

  const ButtonTransition = {
    animate: { y: -50, opacity: 1 },
    transition: { ease: 'easeOut', duration: 2, delay: 1.6 },
  };

  const MediaClickerTransition = {
    animate: { y: -50, opacity: 1 },
    transitionMusic: { ease: 'easeOut', duration: 2, delay: 2.8 },
    transitionImage: { ease: 'easeOut', duration: 2, delay: 3.4 },
    transitionVideo: { ease: 'easeOut', duration: 2, delay: 4.0 },
  };

  return (
    <S.Container>
      <S.Yellow animate={PulseAnimate} transition={PulseTransition} />
      <S.Blue animate={PulseAnimate} transition={PulseTransition} />
      <S.TitleContainer
        animate={TitleTransition.animate}
        transition={TitleTransition.transition}
      >
        <S.TitleTop>
          <div>您即将进入</div>
          <S.TitleTopLeft>卓特视觉</S.TitleTopLeft>
        </S.TitleTop>
        官方网站
      </S.TitleContainer>
      <S.SubTitle
        animate={SubTitleTransition.animate}
        transition={SubTitleTransition.transition}
      >
        Droit
        Visions是国内新生代专注于创意类视频、音乐、图片素材授权、商业定制拍摄的专业服务提供商
        该网站素材和服务均由卓特视觉提供支持，与曲多多无关
      </S.SubTitle>
      <S.ButtonAnimation
        animate={ButtonTransition.animate}
        transition={ButtonTransition.transition}
      >
        <S.CustomButton />
      </S.ButtonAnimation>
      <S.FeaturedMusicAnimation
        animate={MediaClickerTransition.animate}
        transition={MediaClickerTransition.transitionMusic}
      >
        <MediaClicker icon={FeaturedMusic} />
      </S.FeaturedMusicAnimation>
      <S.CommercialImageAnimation
        animate={MediaClickerTransition.animate}
        transition={MediaClickerTransition.transitionImage}
      >
        <MediaClicker icon={CommercialImage} />
      </S.CommercialImageAnimation>
      <S.CreativeVideoAnimation
        animate={MediaClickerTransition.animate}
        transition={MediaClickerTransition.transitionVideo}
      >
        <MediaClicker icon={CreativeVideo} />
      </S.CreativeVideoAnimation>
    </S.Container>
  );
}
