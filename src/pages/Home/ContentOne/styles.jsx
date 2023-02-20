import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../../../components/Button';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 600px;

  @media (max-width: 582px) {
    margin-bottom: 160px;
  }
`;

export const Blue = styled(motion.div)`
  background: ${(props) => props.theme.color.blue};
  border-radius: 360px;
  filter: blur(50px);
  height: 480px;
  left: calc(50% - 480px / 2 + 184px);
  opacity: 0.16;
  position: absolute;
  top: 170px;
  width: 480px;
`;

export const Yellow = styled(motion.div)`
  background: ${(props) => props.theme.color.yellow};
  border-radius: 360px;
  filter: blur(80px);
  height: 320px;
  left: calc(50% - 320px / 2 - 160px);
  opacity: 0.16;
  position: absolute;
  top: 160px;
  width: 320px;
`;

export const TitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 0em;
  line-height: 90px;
  margin-top: 160px;
  opacity: 0;
  text-align: center;
  z-index: 1;
`;

export const TitleTop = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 582px) {
    flex-direction: row;
  }
`;

export const TitleTopLeft = styled.div`
  color: ${(props) => props.theme.color.blue};
`;

export const SubTitle = styled(motion.div)`
  color: ${(props) => props.theme.color.gray};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 40px;
  margin-top: 20px;
  opacity: 0;
  text-align: center;
  max-width: 736px;
  z-index: 1;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ButtonAnimation = styled(motion.div)`
  opacity: 0;
`;

export const CustomButton = styled(Button)`
  opacity: 0;
  z-index: 1;
`;

export const FeaturedMusicAnimation = styled(motion.div)`
  left: calc(50% - 146px / 2 + 348px);
  margin-top: 130px;
  opacity: 0;
  position: absolute;
  z-index: 2;

  @media (max-width: 581px) {
    display: none;
  }

  @media (max-width: 861px) {
    left: calc(50% - 146px / 2 + 200px);
  }
`;

export const CommercialImageAnimation = styled(motion.div)`
  left: calc(50% - 146px / 2 + 206px);
  margin-top: 410px;
  opacity: 0;
  position: absolute;
  z-index: 2;

  @media (max-width: 581px) {
    display: none;
  }
`;

export const CreativeVideoAnimation = styled(motion.div)`
  left: calc(50% - 146px / 2 - 353px);
  margin-top: 230px;
  opacity: 0;
  position: absolute;
  z-index: 2;

  @media (max-width: 581px) {
    display: none;
  }

  @media (max-width: 867px) {
    left: calc(50% - 146px / 2 - 200px);
  }
`;
