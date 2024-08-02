import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../img/goOut.svg";
import profileimg from "../../img/Profile.svg";
import left from "../../img/left.svg";
import logo from "../../img/logo.svg";

const RecommendationBox = styled.div`
  display: flex;
  width: 820px;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
`;

const RecommendationTitle = styled.h2`
  font-family: "KIMM_Bold";
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0px;
  line-height: 160%;
  width: 488px;
`;

const RecommendationContent = styled.div`
  margin-top: 20px;
  font-family: "KIMM_Light";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  text-align: start;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
  width: 506px;
  height: 251px;
  max-height: 152px;
  padding: 33px 27px;
  line-height: 160%;
  align-self: stretch;
`;

const RecommendationContent2 = styled.p`
  font-family: "KIMM_Light";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  text-align: start;
  margin-bottom: 20px;
  border: none;
  width: 476px;
  padding: 0;
  line-height: 160%;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  flex-direction: row;
  width: 1030px;
  height: 650px;
  background: white;
  border-radius: 30px;
  display: flex;
  position: relative;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 70px;
  right: 80px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Profile = styled.div`
  width: 200px;
  padding-left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImg = styled.img`
  height: 163px;
  width: 163px;
  margin-left: 7px;
  margin-bottom: 26px;
`;

const Information = styled.div`
  display: flex;
  text-align: center;
  font-family: KIMM_Light;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 22px;
`;

const CertificateBtn = styled.button`
  display: flex;
  height: 43px;
  width: 180px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border: 0.8px solid #000;
  background-color: transparent;
  text-align: center;
  font-family: KIMM_Light;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  cursor: pointer;
`;

const Tag = styled.div`
  color: #b2d23e;
  display: flex;
  font-family: KIMM_Light;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 54px;
  height: 25px;
  border: 1px solid #b2d23e;
  border-radius: 30px;
  padding: 0px 10px;
  align-items: center;
  justify-content: center;
`;

const Modal2 = ({ onClose }) => {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    navigate("/Medic/CertificatePage");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton src={closeIcon} alt="Close" onClick={onClose} />
        <Profile>
          <ProfileImg src={profileimg} />
          <Information>
            김광준 <Tag style={{ marginLeft: "13px" }}>약사</Tag>
          </Information>
          <Information> 메딕약국 </Information>
          <CertificateBtn onClick={handleCertificateClick}>
            약사 증명서 보기&nbsp; <img src={left} alt="left" />
          </CertificateBtn>
          <img
            src={logo}
            alt="logo"
            style={{ height: "179px", marginTop: "20px" }}
          />
        </Profile>
        <RecommendationBox>
          <RecommendationTitle>전문 분야 경력</RecommendationTitle>
          <RecommendationContent2>
            - 충남대학교 약학대학 졸업
            <br />- 약사 국가 시험 합격
            <br />- 대한 약사회 맞춤형 건강기능식품 전문가 과정 수료
          </RecommendationContent2>
          <RecommendationTitle>제품에 대한 소견</RecommendationTitle>
          <RecommendationContent>
            이 제품의 성분을 하나하나 고려해보았을 때 ~에 사용되는 제품입니다.
            <br />
            이러한 제품들은 일반적으로 ~를 예방하거나 개선하기 위해 사용됩니다.
            하지만, 임신부시다 몸과 같은 점을 주의할 필요가 있습니다. ~~
          </RecommendationContent>
        </RecommendationBox>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal2;
