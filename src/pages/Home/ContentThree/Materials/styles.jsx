import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;

  &._1 {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  width: 584px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  width: 536px;
`;

export const SubTitle = styled.div`
  color: ${(props) => props.theme.color.gray};
  font-size: 18px;
  font-weight: 400;
  height: 116px;
  width: 536px;
`;

export const SubTitleBottom = styled.div`
  margin-top: 37px;
`;

export const Image = styled(motion.img)`
  border-radius: 4px;
  height: 328.5px;
  width: 584px;
`;
