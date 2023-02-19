import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
`;

export const SubTitle = styled.div`
  color: ${(props) => props.theme.color.gray};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 42px;
  margin-top: 25px;
`;
