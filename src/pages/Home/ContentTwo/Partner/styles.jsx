import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  background: linear-gradient(
    95.36deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 180px;
  padding: 24px;
  max-width: 328.67px;

  &._0 {
    background: linear-gradient(94.55deg, #f5e774 0%, #05a3e7 100%);
    background-position: 10%;
    background-size: 140%
  }
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;

  &._0 {
    color: #16181a;
  }
`;

export const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;

  &._0{
    color: #2e5355;
  }
`;
