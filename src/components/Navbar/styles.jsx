import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(16px);
  background: ${(props) => props.theme.color.glass};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 156px 22px 128px;
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const Logo = styled(motion.img)`
  height: 36px;
  margin-left: -300px;
  width: 140px;
`;

export const CustomButton = styled(motion.div)`
  margin-right: -300px;
`;
