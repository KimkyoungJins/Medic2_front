import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import img from "../../img/Rectangle 5169.png";
import hongsam from "../../img/hongsam.png";

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
  font-family: "Pretendard-Regular";
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

  &:active {
    border: 1px solid #b2d23e;
    color: #b2d23e;
  }
`;

const Arrow = styled.div`
  font-family: "Pretendard-Regular";
`;

const Customization = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // const userEmail = localStorage.getItem("userEmail");

    // if (!userEmail) {
    //   console.warn(
    //     "No user email found in local storage. Using default email for testing."
    //   );
    // }

    // axios
    //   .get(`/api/user/main?userEmail=${userEmail}`)
    //   .then((response) => {
    //     if (response.data.success) {
    //       setData(response.data.data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("There was an error fetching the data:", error);
    //   });
    // }, []);

    const mockData = {
      selectedHealthTags: ["기억력 개선", "혈당조절", "수면질개선"],
      recommendedProducts: [
        {
          productId: 1,
          productName: "상품A",
          healthTags: ["혈당조절"],
          image: hongsam,
          price: "29,990",
        },
        {
          productId: 2,
          productName: "상품B",
          healthTags: ["혈당조절"],
          image: hongsam,
          price: "19,990",
        },
        {
          productId: 3,
          productName: "상품C",
          healthTags: ["수면질개선"],
          image: hongsam,
          price: "25,990",
        },
        {
          productId: 4,
          productName: "상품D",
          healthTags: ["수면질개선"],
          image: hongsam,
          price: "23,990",
        },
        {
          productId: 5,
          productName: "상품G",
          healthTags: ["기억력 개선"],
          image: hongsam,
          price: "27,990",
        },
        {
          productId: 6,
          productName: "상품H",
          healthTags: ["기억력 개선"],
          image: hongsam,
          price: "24,990",
        },
      ],
    };
    setData(mockData);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { selectedHealthTags, recommendedProducts } = data;

  const slides = selectedHealthTags.flatMap((tag) =>
    recommendedProducts
      .filter((product) => product.healthTags.includes(tag))
      .slice(0, 2)
      .map((product) => ({ ...product, tag }))
  );

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
        {selectedHealthTags.map((tag, index) => (
          <span key={index}>#{tag} </span>
        ))}
      </Subtitle>
      <CarouselContainer>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Slide
              key={`${slide.tag}-${slide.productId}`}
              bgImage={slide.image}
            >
              <OverlayImage src={img} alt="Overlay" />
              <ProductInfo>
                <Product>#{slide.productName}</Product>
                <Product>#{slide.price}원</Product>
                <Product>#{slide.tag}</Product>
              </ProductInfo>
              <More onClick={() => handleMoreClick(slide.productId)}>
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
