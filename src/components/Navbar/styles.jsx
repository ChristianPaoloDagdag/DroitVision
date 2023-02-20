import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(16px);
  background: ${(props) => props.theme.color.glass};
  display: flex;
  justify-content: center;
  padding: 22px 156px 22px 128px;
  position: sticky;
  top: 0;
  z-index: 5;

  @media (min-width: 585px) {
    justify-content: space-between;
  }
`;

export const Logo = styled(motion.img)`
  height: 36px;
  width: 140px;
`;

export const CustomButton = styled(motion.div)`
  display: none;

  @media (min-width: 585px) {
    display: block;
  }
`;
