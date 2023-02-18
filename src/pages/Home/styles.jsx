import styled from 'styled-components';

const Container = styled.div`
  background-color:  ${(props) => props.theme.color.black};
  color: white;
  display: flex;
  flex-direction: column;
`;

export default Container;
