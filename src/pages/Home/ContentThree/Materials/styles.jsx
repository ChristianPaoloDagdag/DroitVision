import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  @media (min-width: 1242px) {
    flex-direction: row-reverse;
    width: 1200px;

    &._1 {
      flex-direction: row;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 450px;

  @media (min-width: 1242px) {
    margin-top: 0px;
    width: 545px;
  }
`;

export const Title = styled(motion.div)`
  font-size: 28px;
  font-weight: 600;
`;

export const SubTitle = styled(motion.div)`
  color: ${(props) => props.theme.color.gray};
  font-size: 18px;
  font-weight: 400;
  min-height: 116px;
  max-width: 536px;
`;

export const SubTitleBottom = styled(motion.div)`
  margin-top: 37px;
`;

export const Image = styled(motion.img)`
  border-radius: 4px;
  width: 584px;

  @media (max-width: 622px) {
    width: 450px;
  }

  @media (max-width: 470px) {
    width: 400px;
  }

  @media (max-width: 431px) {
    width: 350px;
  }
`;
