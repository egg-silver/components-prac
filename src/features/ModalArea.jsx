import React from 'react';
import Modal from '../components/modal/Modal';
import ModalX from '../components/modal/Modal2';
import { styled } from 'styled-components';

export default function ModalArea() {
  return (
    <>
      <Layout>
        <Modal
          text={'확인과 닫기 버튼이 2개있어요'}
          button={'MODAL'}
          color={'skyblue'}
        />
        <ModalX
          text={'닫기 버튼만 있고 외부 영역 누르면 닫혀요'}
          button={'MODAL With X'}
          color={'pink'}
        />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  gap: 10px;
`;
