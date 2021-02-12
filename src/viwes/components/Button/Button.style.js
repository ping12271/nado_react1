import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    margin: 0 4px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: transparent;
  border-radius: 4px;
  min-width: 100px;
  height: 36px;
  justify-content: center;
  font-size: 13px;
  background: #18f;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #0f78e2;
  }
`; //변수로 내보내겠다. 다른 곳에서 {}를 통해 받을 수 있다.