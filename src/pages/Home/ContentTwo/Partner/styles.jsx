import styled from 'styled-components';

export const Container = styled.div`
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
  width: 328.67px;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const SubTitle = styled.div`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
`;
