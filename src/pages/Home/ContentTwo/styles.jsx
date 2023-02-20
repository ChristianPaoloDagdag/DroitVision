import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 460px;
  margin-top: -95px;
  padding-top: 40px;
`;

export const Title = styled(motion.div)`
  font-size: 36px;
  font-weight: 600;
  opacity: 0;
  margin-bottom: 60px;
`;

export const PartnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
