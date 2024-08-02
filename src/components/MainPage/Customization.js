import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../img/Rectangle 5169.png";

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
  width: 1170px;
  text-align: start;
`;

const CarouselContainer = styled.div`
  margin-top: 12px;
  width: 1170px;
  height: 420px;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  .slick-list {
    border-radius: 30px;
  }

  .slick-dots li button:before {
    font-size: 12px;
  }
  .slick-dots {
    bottom: -30px;
  }
`;

const Slide = styled.div`
  width: 1170px;
  height: 386px;
  background-size: cover;
  background-position: center;
  display: flex !important;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  background-image: url(${(props) => props.bgImage});
  border-radius: 30px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  border-radius: 30px;
`;

const ProductInfo = styled.div`
  font-family: "KIMM_Light";
  font-size: 25px;
  color: white;
  border-radius: 5px;
  margin: 20px;
  z-index: 2;
  margin-top: 88px;
  margin-left: 101px;
`;

const Product = styled.div`
  padding-bottom: 7px;
`;

const More = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 25px;
  font-family: "KIMM_Light";
  border: 1px solid white;
  border-radius: 10px;
  z-index: 2;
  width: 171px;
  height: 52px;
  margin-left: 105px;
  margin-top: 65px;
  background-color: transparent;
  cursor: pointer;

  &:active,
  &:hover {
    border: 1px solid #b2d23e;
    color: #b2d23e;
  }
`;

const Arrow = styled.div`
  font-family: "Pretendard-Regular";
`;

const Customization = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://52.78.188.110:8001/api/products/custom`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error("Unexpected response format:", data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  if (!data.length) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleMoreClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  return (
    <>
      <Title>#나의건강해시태그 맞춤추천 상품</Title>
      <Subtitle>
        {data.map((product) => (
          <span key={product.id}>#{product.tag} </span>
        ))}
      </Subtitle>
      <CarouselContainer>
        <Slider {...settings}>
          {data.map((product, index) => (
            <Slide
              key={index}
              bgImage={`http://52.78.188.110:8001/images/${product.imageUrl}`}
            >
              <OverlayImage src={img} alt="Overlay" />
              <ProductInfo>
                <Product>#{product.name}</Product>
                <Product>정상가격: {product.normalPrice}원</Product>
                <Product>판매가격: {product.salePrice}원</Product>
                <Product>리뷰개수: {product.reviewCnt}</Product>
                <Product>#{product.tag}</Product>
              </ProductInfo>
              <More onClick={() => handleMoreClick(product.id)}>
                더보기&nbsp;&nbsp;<Arrow>→</Arrow>
              </More>
            </Slide>
          ))}
        </Slider>
      </CarouselContainer>
    </>
  );
};

export default Customization;
