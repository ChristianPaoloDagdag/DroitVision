import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
`;

export const Blue = styled.div`
  background: ${(props) => props.theme.color.blue};
  border-radius: 360px;
  filter: blur(80px);
  height: 480px;
  left: calc(50% - 480px / 2 + 184px);
  opacity: 0.16;
  position: absolute;
  top: 170px;
  width: 480px;
`;

export const Yellow = styled.div`
  background: ${(props) => props.theme.color.yellow};
  border-radius: 360px;
  filter: blur(80px);
  height: 320px;
  left: calc(50% - 320px / 2 - 160px);
  opacity: 0.16;
  position: absolute;
  top: 160px;
  width: 320px;
`;
