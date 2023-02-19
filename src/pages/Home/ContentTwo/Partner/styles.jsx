import styled from 'styled-components';

export const Container = styled.div`
  width: 328.67px;
  height: 180px;

  display: flex;
  flex-direction: column;
  padding: 24px;

  background: linear-gradient(
    95.36deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  gap: 16px;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: rgba(255, 255, 255, 0.64);
`;
