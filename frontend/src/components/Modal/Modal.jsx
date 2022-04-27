import React from "react";
import {DarkBackground, ModalBlock, CloseButton} from "./Modal.styled";

function Modal({visible, onClose}) {
  if (!visible) return;
  return (
    <DarkBackground>
      <ModalBlock>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalBlock>
    </DarkBackground>
  );
}

export {Modal};
