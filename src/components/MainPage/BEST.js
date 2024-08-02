import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "../../img/Rectangle 5171.png";
import cart from "../../img/cart2.svg";
import cart2 from "../../img/greencart.svg";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 707px;
`;

const ProductContainer = styled.div`
  margin-bottom: 112px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 1300px;
`;

const ProductCard = styled.div`
  position: relative;
  width: 337px;
  height: 389px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: white;
  font-family: "KIMM_Light";
  font-size: 25px;
  padding-left: 37px;
  padding-bottom: 24px;
  box-sizing: border-box;
`;

const ProductTitle = styled.div`
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  margin-bottom: 10px;
`;

const ProductFeature = styled.div``;

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
  font-weight: 100;
  font-size: 20px;
  color: black;
  text-align: start;
`;

const GoContainer = styled.button`
  display: flex;
  align-items: center;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid #8c8c8c;
  width: 150px;
  height: 33px;
  justify-content: center;
  border-radius: 10px;
  margin-left: 30px;
  background-color: transparent;
  color: #8c8c8c;

  &:hover {
    color: #b2d23e;
    border: 1px solid #b2d23e;

    img {
      content: url(${cart2});
      width: 17px;
    }
  }
`;

const Img = styled.img`
  margin-left: 8px;
`;

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/best`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  const goAllProduct = () => {
    navigate("/Medic/AllProductPage");
  };

  const handleProductClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  return (
    <>
      <Title>#BEST 추천 상품</Title>
      <Div>
        <Subtitle>BEST 추천 상품을 만나볼 수 있어요</Subtitle>
        <GoContainer onClick={goAllProduct}>
          전체 제품 보러가기
          <Img src={cart} alt="cart icon" />
        </GoContainer>
      </Div>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={`${process.env.REACT_APP_API_BASE_URL}/images/${product.imageUrl}`}
              alt={product.name}
            />
            <Overlay className="overlay">
              <ProductTitle>#{product.name}</ProductTitle>
              <ProductPrice>정상가격: {product.normalPrice}원</ProductPrice>
              <ProductPrice>판매가격: {product.salePrice}원</ProductPrice>
              <ProductFeature>리뷰개수: {product.reviewCnt}</ProductFeature>
              <ProductFeature>#{product.tag}</ProductFeature>
            </Overlay>
          </ProductCard>
        ))}
      </ProductContainer>
    </>
  );
};

export default BestProducts;
