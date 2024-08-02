import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import closeIcon from "../../img/goOut.svg";
import uploadIcon from "../../img/upload.svg";
import cart from "../../img/cart.svg";
import search from "../../img/searchh.svg";

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
  gap: 10px;
  background: white;
  border-radius: 30px;
`;

const Div = styled.div`
  display: flex;
  padding: 67px 0px;
  width: 1174px;
  height: 500px;
  align-items: center;
`;
const Div2 = styled.div`
  margin: 0px;
  display: flex;
  align-items: center;
`;
const CloseButton = styled.img`
  position: absolute;
  top: 105px;
  right: 260px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const UploadBtn = styled.button`
  display: flex;
  width: 246px;
  padding: 8px 12px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  background: ${(props) => (props.disabled ? "#8C8C8C" : "#3e88d2")};
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: "Pretendard-Regular";
  color: white;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#8C8C8C" : "#2668aa")};
  }
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 480px;
  border-right: 0.4px solid #8c8c8c;
  text-align: center;
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 130%;
  cursor: pointer;
  color: #8c8c8c;
  width: 450px;
`;

const UploadIcon = styled.img`
  width: 153px;
  height: auto;
  margin-bottom: 20px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const RecommendationBox = styled.div`
  display: flex;
  align-items: center;
  height: 480px;
  flex-direction: column;
  width: 730px;
`;

const RecommendationTitle = styled.h2`
  font-family: "KIMM_Bold";
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0px;
  line-height: 160%;
  width: 488px;
`;

const RecommendationContent = styled.p`
  font-family: "KIMM_Light";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  text-align: start;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 10px;
  width: 434px;
  height: 152px;
  padding: 33px 27px;
  line-height: 160%;
`;

const HashtagContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  width: 488px;
  margin-bottom: 36px;
  margin-top: 16px;
`;

const Hashtag = styled.span`
  margin-right: 12px;
  color: #b2d23e;
  border: 1px solid #b2d23e;
  border-radius: 10px;
  padding: 5px 10px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 600;
`;

const Modal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [recommendationContent, setRecommendationContent] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setIsAnalyzed(false);
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleAnalyzeClick = () => {
    if (file) {
      setRecommendationContent(
        "이 제품의 성분을 하나하나 고려해보았을 때 ~에 사용되는 제품입니다. 이러한 제품들은 일반적으로 ~를 예방하거나 개선하기 위해 사용됩니다. 하지만, 임신부시다 몸과 같은 점을 주의할 필요가 있습니다. ~~"
      );
      setHashtags(["#면역기능개선", "#피부건강개선", "#혈행흐름개선"]);
      setIsAnalyzed(true);
    }
  };

  const handleNavigateToProducts = () => {
    if (isAnalyzed) navigate("/Medic/AllProductPage");
  };

  const handleNavigateToHashtags = () => {
    if (isAnalyzed) navigate("/Medic/HashtagPage");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton src={closeIcon} alt="Close" onClick={onClose} />
        <Div>
          <UploadContainer>
            <UploadIcon
              src={uploadIcon}
              alt="Upload Icon"
              onClick={handleUploadClick}
            />
            <p>
              건강검진 결과지를 업로드 하세요.
              <br />
              파일형식: pdf
            </p>
            <HiddenFileInput
              id="fileInput"
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            {file && <p>{file.name}</p>}
            <UploadBtn onClick={file ? handleAnalyzeClick : handleUploadClick}>
              {file ? "분석하기" : "파일 업로드하기"}
            </UploadBtn>
          </UploadContainer>
          <RecommendationBox>
            <RecommendationTitle>건강검진 결과에 대한 소견</RecommendationTitle>
            <RecommendationContent>
              {recommendationContent}
            </RecommendationContent>
            <RecommendationTitle
              style={{ borderTop: "1px solid #8C8C8C", paddingTop: "36px" }}
            >
              추천 건강 맞춤 해시태그
            </RecommendationTitle>
            <HashtagContainer>
              {hashtags.map((hashtag, index) => (
                <Hashtag key={index}>{hashtag}</Hashtag>
              ))}
            </HashtagContainer>
            <Div2>
              <UploadBtn
                isAnalyzed={isAnalyzed}
                onClick={handleNavigateToHashtags}
                disabled={!isAnalyzed}
                style={{
                  marginRight: "15px",
                }}
              >
                해시태그 알아보기&nbsp;
                <img src={search} alt="search" />
              </UploadBtn>
              <UploadBtn
                isAnalyzed={isAnalyzed}
                onClick={handleNavigateToProducts}
                disabled={!isAnalyzed}
              >
                관련 제품 보러가기&nbsp;
                <img src={cart} alt="cart" />
              </UploadBtn>
            </Div2>
          </RecommendationBox>
        </Div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
