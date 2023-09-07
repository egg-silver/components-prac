import React, { useState } from 'react';
import { styled } from 'styled-components';

export default function Modal({ text, button, color }) {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <div>
        <Button onClick={handleModal} color={color}>
          {button}
        </Button>
        {open && (
          <ModalBackdrop>
            <WhiteBox>
              {text}
              <ButtonLayout>
                <Button onClick={handleModal}>닫기</Button>
                <Button onClick={handleModal}>확인</Button>
              </ButtonLayout>
            </WhiteBox>
          </ModalBackdrop>
        )}
      </div>
    </>
  );
}

const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: ${(color) => color.color};
  border: none;
  cursor: pointer;
  border-radius: 8px;
`;

const ButtonLayout = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
  gap: 5px;
`;

const WhiteBox = styled.div`
  z-index: 1;
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  background-color: white;
  position: relative;
  padding: 10px;
`;
const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
