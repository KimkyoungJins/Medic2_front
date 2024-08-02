import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Baguni from "../img/Baguni.png";
import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
import img4 from "../img/4.png";
import img5 from "../img/5.png";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/9.png";
import img10 from "../img/10.png";
import img11 from "../img/11.png";
import img12 from "../img/12.png";
import Header from "../components/MainPage/Header";

const dummyProducts = [
  {
    productId: "550e8400-e29b-41d4-a716-446655440000",
    name: "닥터에스더 면역엔 베타글루칸",
    originalPrice: 60000,
    discountPrice: 32000,
    healthTags: ["#면역기능개선", "#기억력개선"],
    reviewCount: 120,
    imageUrl: img1,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440001",
    name: "생생기억력플러스",
    originalPrice: 50000,
    discountPrice: 48000,
    healthTags: ["#기억력개선"],
    reviewCount: 85,
    imageUrl: img2,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440002",
    name: "더좋은 면역 베타글루칸",
    originalPrice: 40000,
    discountPrice: 30000,
    healthTags: ["#면역기능개선", "#피부건강"],
    reviewCount: 95,
    imageUrl: img3,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440003",
    name: "혈당엔 바나바 퍼펙트케어",
    originalPrice: 30000,
    discountPrice: 22000,
    healthTags: ["#혈당 조절"],
    reviewCount: 75,
    imageUrl: img4,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440004",
    name: "뺀다요",
    originalPrice: 32000,
    discountPrice: 21000,
    healthTags: ["#체지방 감소", "#운동수행능력"],
    reviewCount: 60,
    imageUrl: img5,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440005",
    name: "맥스컷 다이어트 부스터3.1",
    originalPrice: 50000,
    discountPrice: 40000,
    healthTags: ["#체지방 감소"],
    reviewCount: 110,
    imageUrl: img6,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440006",
    name: "콜레스테롤원 콜레스타",
    originalPrice: 50000,
    discountPrice: 32000,
    healthTags: ["#간기능개선", "#기억력개선"],
    reviewCount: 130,
    imageUrl: img7,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440007",
    name: "오늘은 컷",
    originalPrice: 42000,
    discountPrice: 32000,
    healthTags: ["#체중조절"],
    reviewCount: 140,
    imageUrl: img8,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440008",
    name: "콜레스홈런",
    originalPrice: 22000,
    discountPrice: 12000,
    healthTags: ["#면역기능개선"],
    reviewCount: 90,
    imageUrl: img9,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440009",
    name: "베아제닉 혈당 밸런스",
    originalPrice: 60000,
    discountPrice: 32000,
    healthTags: ["#혈당조절", "#혈중중성지방개선"],
    reviewCount: 85,
    imageUrl: img10,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440010",
    name: "브리오 혈당 밸런스 알파",
    originalPrice: 42000,
    discountPrice: 32000,
    healthTags: ["#혈당조절"],
    reviewCount: 115,
    imageUrl: img11,
  },
  {
    productId: "550e8400-e29b-41d4-a716-446655440011",
    name: "당 편한 세상",
    originalPrice: 22000,
    discountPrice: 15000,
    healthTags: ["#관절/뼈 건강"],
    reviewCount: 100,
    imageUrl: img12,
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  margin-bottom: 80px;
`;

const ProductCard = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const ButtonContatiner = styled.div`
  width: 1235px;
`;
const Button1 = styled.button`
  margin-top: 96px;
  font-family: "Pretendard-Regular";
  font-size: 18px;
  width: 100px;
  border: none;
  border-right: 1px solid black;
  background-color: transparent;
  color: #8c8c8c;
  margin-left: 10px;

  &:focus {
    color: black;
  }

  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  width: 100px;
  border: none;
  border-right: 1px solid black;
  background-color: transparent;
  color: #8c8c8c;

  &:focus {
    color: black;
  }
  &:hover {
    color: black;
  }
`;

const Button2 = styled.button`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  width: 100px;
  border: none;
  background-color: transparent;
  color: #8c8c8c;
  &:focus {
    color: black;
  }
  &:hover {
    color: black;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 30px;
  transition: border-radius 0.3s ease-in-out;

  &:hover {
    border-radius: 30px;
  }
`;

const ProductImage = styled.img`
  height: auto;
  width: 269px;
  height: 284px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const BaguniImage = styled.img`
  position: absolute;
  bottom: 17px;
  right: 17px;
  width: 30px;
  height: 30px;
`;

const Tag = styled.span`
  display: inline-block;
  background-color: transparent;
  color: #b2d23e;
  border: 1.3px solid #b2d23e;
  border-radius: 10px;
  padding: 5px;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  margin-right: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
`;

const Name = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  padding-bottom: 2px;
  padding-top: 10px;
  color: ${(props) => (props.hover ? "#3e82d2" : "inherit")};
`;

const Original = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 20px;
  text-decoration: line-through;
  color: #8c8c8c;
  padding-bottom: 2px;
`;

const Discount = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 6px;
`;

const SearchPage = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchOption, setSearchOption] = useState("제품");
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilter = (criteria) => {
    let sortedProducts = [...products];

    switch (criteria) {
      case "review":
        sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "highPrice":
        sortedProducts.sort((a, b) => b.discountPrice - a.discountPrice);
        break;
      case "lowPrice":
        sortedProducts.sort((a, b) => a.discountPrice - b.discountPrice);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };

  const handleCardClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  const searchQuery = getQueryParams().get("query") || "";

  const filteredProducts = products.filter((product) => {
    if (searchOption === "제품") {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchOption === "기능") {
      return product.healthTags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return false;
  });

  return (
    <>
      <Header onSearchOptionChange={setSearchOption} />
      <ButtonContatiner>
        <Button1 onClick={() => handleFilter("review")}>리뷰 많은순</Button1>
        <Button onClick={() => handleFilter("highPrice")}>가격 높은순</Button>
        <Button2 onClick={() => handleFilter("lowPrice")}>가격 낮은순</Button2>
      </ButtonContatiner>
      <Container>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleCardClick(product.productId)}
          >
            <ImageWrapper>
              <ProductImage
                src={product.imageUrl}
                alt={product.name}
                style={{
                  transform:
                    hoveredProduct === index ? "scale(1.1)" : "scale(1)",
                }}
              />
              <BaguniImage src={Baguni} alt="Baguni" />
            </ImageWrapper>
            <Product>
              <Name hover={hoveredProduct === index}>{product.name}</Name>
              <Original>{product.originalPrice.toLocaleString()}원</Original>
              <Discount>{product.discountPrice.toLocaleString()}원</Discount>
            </Product>
            <TagContainer>
              {product.healthTags &&
                product.healthTags.map((tag, tagIndex) => (
                  <Tag key={tagIndex}>{tag}</Tag>
                ))}
            </TagContainer>
          </ProductCard>
        ))}
      </Container>
    </>
  );
};

export default SearchPage;
