import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import img from "../../img/Hashtag.png";
import search from "../../img/searchh.svg";
import search2 from "../../img/greensearch.svg";

const Title = styled.div`
  font-family: "KIMM_Light";
  color: black;
  font-size: 22px;
  width: 1170px;
  text-align: start;
  margin-bottom: 12px;
  margin-top: 67px;
`;

const Subtitle = styled.div`
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 100;
  color: black;
  width: 1170px;
  text-align: start;
`;

const Container = styled.div`
  margin-top: 12px;
  width: 1170px;
  height: 386px;
  background-image: url(${img});
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

const InnerTitle = styled.div`
  margin-top: 61px;
  font-family: "Pretendard-Regular";
  font-size: 24px;
  font-weight: 700px;
  color: white;
  justify-content: center;
  display: flex;
`;

const Box1 = styled.div`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  width: 693px;
  height: 315px;
`;

const Box2 = styled.div`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  width: 275px;
  height: 315px;
`;

const TagBox = styled.div`
  margin-top: 55px;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  text-align: center;
`;

const TagBox2 = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  font-family: "Pretendard-Regular";
  font-size: 17.26px;
  flex-direction: column;
  align-items: center;
`;

const Tag = styled.div`
  display: inline-block;
  padding: 8px 12px;
  margin: 8px;
  color: #b7b7b7;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
  line-height: 30px;
  text-align: center;
  transition: transform 0.3s, color 0.3s;
  width: auto;
  height: 30px;

  &:hover {
    color: white;
    font-weight: bold;
    transform: scale(1.2);
    z-index: 1;
  }
`;

const Tag2 = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
  background-color: transparent;
  border-radius: 12.33px;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid white;
  color: white;
  height: 38px;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const MoreTag = styled.div`
  display: inline-block;
  padding: 8px 12px;
  margin: 8px;
  color: #b2d23e;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap;
`;

const Img = styled.img`
  margin-left: 5px;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 61px;
  padding: 8px 12px;
  border: 1px solid #d8d8d8;
  background-color: transparent;
  color: #d8d8d8;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  height: 33px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  &:hover {
    color: #b2d23e;
    border: 1px solid #b2d23e;

    img {
      content: url(${search2});
      width: 17px;
    }
  }
`;

const Button2 = styled.button`
  padding: 8px 12px;
  border: 1.3px solid white;
  color: white;
  background-color: transparent;
  border-radius: 12.33px;
  cursor: pointer;
  width: 90px;
  height: 38px;
  font-family: "Pretendard-Regular";
  font-size: 14px;

  &:hover {
    border: 1.3px solid #b2d23e;
    color: #b2d23e;
  }
`;

const RecommendedProducts = styled.div`
  width: 1170px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ProductName = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 16px;
  margin-top: 10px;
`;

const ProductPrice = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #8c8c8c;
  margin-top: 5px;
`;

const Modal = styled.div`
  position: absolute;
  bottom: 60%;
  left: 50%;
  transform: translateX(-50%);
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
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 20px solid rgba(132, 155, 45, 0.9);
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
    background-color: white;
    color: #b2d23e;
  }
`;

const HashtagSelect = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const tags = [
    "관절/뼈 건강",
    "기억력개선",
    "혈당 조절",
    "체지방 감소",
    "피부건강",
    "운동수행 능력",
    "면역기능개선",
    "혈중 중성지방 개선",
  ];

  const handleTagClick = (tag) => {
    if (selectedTags.length < 3 && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));

    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/tags`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Tag removed successfully:", data);
          setRecommendedProducts(data.updatedTags);
          alert("해시태그가 성공적으로 제거되었습니다!");
        } else {
          console.error("Failed to remove tag:", data.message);
          alert("해시태그 제거에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("해시태그 제거 중 오류가 발생했습니다.");
      });
  };

  const handleSave = () => {
    const selectedHealthTags = selectedTags;

    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/tags`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag: selectedHealthTags }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Health tags updated successfully:", data);
          setRecommendedProducts(data.updatedTags);
          alert("해시태그가 성공적으로 저장되었습니다!");
        } else {
          console.error("Failed to update health tags:", data.message);
          alert("해시태그 저장에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("해시태그 저장 중 오류가 발생했습니다.");
      });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Title>#맞춤형 건강해시태그</Title>
      <Subtitle>해시태그는 최대 3개까지 설정할 수 있어요</Subtitle>
      <Container>
        <Logo>
          <Box1>
            <Logo>
              <InnerTitle style={{ marginRight: "21px" }}>
                건강 맞춤형 해시태그
              </InnerTitle>
              <ButtonContainer>
                {showModal && (
                  <Modal>
                    <ModalContent>
                      해시태그별 상세정보를 읽고 나에게 필요한
                      <br /> 건강기능식품을 알아보세요
                    </ModalContent>
                    <ModalButton onClick={handleModalClose}>확인</ModalButton>
                    <ModalTriangle />
                  </Modal>
                )}
                <Button onClick={() => navigate("/Medic/HashtagPage")}>
                  해시태그 알아보기
                  <Img
                    src={search}
                    alt="search icon"
                    style={{ width: "19px" }}
                  />
                </Button>
              </ButtonContainer>
            </Logo>
            <TagBox>
              {tags.slice(0, 5).map((tag) => (
                <Tag key={tag} onClick={() => handleTagClick(tag)}>
                  {tag}
                </Tag>
              ))}
              <br />
              {tags.slice(5, 8).map((tag) => (
                <Tag key={tag} onClick={() => handleTagClick(tag)}>
                  {tag}
                </Tag>
              ))}
              <MoreTag>더보기</MoreTag>
            </TagBox>
          </Box1>
          <Box2>
            <InnerTitle>나의 건강 해시태그</InnerTitle>
            <TagBox2>
              {selectedTags.map((tag) => (
                <Tag2 key={tag} onClick={() => handleRemoveTag(tag)}>
                  {tag} x
                </Tag2>
              ))}
            </TagBox2>
          </Box2>
        </Logo>
        <div
          style={{ width: "1170px", display: "flex", justifyContent: "center" }}
        >
          <Button2 onClick={handleSave}>저장하기</Button2>
        </div>
      </Container>

      <RecommendedProducts>
        {recommendedProducts.length > 0 && (
          <>
            <Title>추천 제품</Title>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {recommendedProducts.map((product) => (
                <ProductCard key={product.productId}>
                  <ProductImage src={product.image} alt={product.productName} />
                  <ProductName>{product.productName}</ProductName>
                  <ProductPrice>{product.price}원</ProductPrice>
                </ProductCard>
              ))}
            </div>
          </>
        )}
      </RecommendedProducts>
    </>
  );
};

export default HashtagSelect;
