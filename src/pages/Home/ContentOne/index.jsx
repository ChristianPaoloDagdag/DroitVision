import React from 'react';
import * as S from './styles';

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

  return (
    <S.Container>
      <S.Yellow animate={PulseAnimate} transition={PulseTransition} />
      <S.Blue animate={PulseAnimate} transition={PulseTransition} />
      <S.TitleContainer>
        <div>
          您即将进入
          {' '}
          <S.TitleTopLeft>卓特视觉</S.TitleTopLeft>
        </div>
        官方网站
      </S.TitleContainer>
      <S.SubTitle>
        Droit
        Visions是国内新生代专注于创意类视频、音乐、图片素材授权、商业定制拍摄的专业服务提供商
        该网站素材和服务均由卓特视觉提供支持，与曲多多无关
      </S.SubTitle>
      <S.CustomButton />
    </S.Container>
  );
}
