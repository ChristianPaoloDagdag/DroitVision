import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 460px;
  padding-top: 40px;
  margin-top: -95px;
`;

export const Title = styled(motion.div)`
  font-size: 36px;
  font-weight: 600;
  opacity: 0;
`;

export const PartnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const PartnerChild = styled(motion.div)``;
