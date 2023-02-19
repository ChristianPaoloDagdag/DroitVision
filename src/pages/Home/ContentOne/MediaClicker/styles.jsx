import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  align-items: center;
  backdrop-filter: blur(16px);
  background: linear-gradient(
    95.36deg,
    ${(props) => props.theme.color.mediaClickerGradientOne},
    ${(props) => props.theme.color.mediaClickerGradientTwo}
  );
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  height: 58px;
  justify-content: center;
  position: absolute;
  user-select: none;
  width: 146px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  height: 18px;
  width: 12px;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
