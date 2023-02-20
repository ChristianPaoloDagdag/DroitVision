import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 70px;
`;

export const Title = styled(motion.div)`
  font-size: 36px;
  font-weight: 600;
  margin-top: 152px;
`;

export const MaterialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 60px;
  padding-left: 15px
  padding-rigth: 15px;
`;
