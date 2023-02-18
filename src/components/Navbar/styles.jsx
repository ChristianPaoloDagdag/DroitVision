import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(16px);
  background: ${(props) => props.theme.color.glass};
  display: flex;
  flex-direction: row;
  height: 80px;
  padding: 0px 128px 0px 156px;
  position: sticky;
  top: 0;
`;

export const Logo = styled.img`
  height: 36px;
  width: 140px;
`;
