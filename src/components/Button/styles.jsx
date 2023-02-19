import styled from 'styled-components';

export const CustomButton = styled.button`
  all: unset;
  align-items: center;
  background: ${(props) => props.theme.color.gradient};
  border-radius: 1000px;
  box-shadow: 0px 0px 16px ${(props) => props.theme.color.buttonShadowGreen},
    0px 0px 16px ${(props) => props.theme.color.buttonShadowBlue};
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 40px;
  justify-content: center;
  user-select: none;
  width: 140px;

  &:hover {
    cursor: pointer;
    filter: brightness(70%);
    transition: filter 0.5s ease-out;
  }

  &:active {
    filter: brightness(50%);
    transition: filter 0.1s ease;
  }
`;

export const ArrowForward = styled.img`
  height: 18px;
  width: 18px;
`;

export const Text = styled.div`
  color: ${(props) => props.theme.color.black};
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
`;
