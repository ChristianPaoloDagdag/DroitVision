import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../../../components/Button';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 600px;
`;

export const Blue = styled(motion.div)`
  background: ${(props) => props.theme.color.blue};
  border-radius: 360px;
  filter: blur(80px);
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

export const TitleTopLeft = styled.span`
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
  width: 736px;
  z-index: 1;
`;

export const ButtonAnimation = styled(motion.div)`
  opacity: 0;
`;

export const CustomButton = styled(Button)`
  opacity: 0;
  z-index: 1;
`;
