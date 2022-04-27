import styled from "styled-components";

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const ModalBlock = styled.div`
  width: 912px;
  height: 548px;
  padding: 48px;
  background: #fff;
  border: 2px solid;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
`;

export {DarkBackground, ModalBlock, CloseButton};
