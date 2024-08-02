import React, { useState } from "react";
import HashtagSelect from "../components/MainPage/HashtagSelect";
import Customization from "../components/MainPage/Customization";
import Header from "../components/MainPage/Header";
import BEST from "../components/MainPage/BEST";
import EffectiveProduct from "../components/MainPage/EffectiveProduct";

import modalImage from "../img/Frame 15595.svg";
import Modal from "../components/MainPage/Modal";
import styled from "styled-components";

const Modal1 = styled.div`
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translateY(-50%) translateX(-20px);
  background-color: rgba(132, 155, 45, 0.9);
  padding: 19px 25px 16px 26px;
  border-radius: 10px;
  z-index: 1000;
  width: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTriangle = styled.div`
  position: absolute;
  top: 50%;
  right: -12px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid rgba(132, 155, 45, 0.9);
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
`;

const ModalContent = styled.div`
  color: white;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: transparent;
  color: #fff;
  border-radius: 15px;
  border: 0.8px solid #fff;
  width: 36.788px;
  height: 22px;
  margin-top: 10px;
  cursor: pointer;
  font-family: "Pretendard-Regular";
  font-size: 11px;
  &:hover {
    border: 0.8px solid #b2d23e;
    color: #b2d23e;
  }
`;

const ImageContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 50px;
  z-index: 1000;
`;

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [showModal, setShowModal] = useState(true);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <HashtagSelect />
      <Customization />
      <BEST />
      <EffectiveProduct />
      <ImageContainer>
        {showModal && (
          <Modal1>
            <ModalContent>
              건강검진 결과지를 업로드하고 나에게 필요한 건강기능식품을 추천
              받아보세요
            </ModalContent>
            <ModalButton onClick={handleModalClose}>확인</ModalButton>
            <ModalTriangle />
          </Modal1>
        )}
        <img
          src={modalImage}
          alt="Open Modal"
          onClick={openModal}
          style={{
            cursor: "pointer",
            width: "89px",
            height: "89px",
          }}
        />
      </ImageContainer>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default MainPage;
