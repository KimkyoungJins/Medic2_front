import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Baguni from "../../img/Baguni.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
`;

const ProductCard = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
`;

const Button1 = styled.button`
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

const Filtering = () => {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/products`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleFilter = (criteria) => {
    let sortedProducts = [...products];

    switch (criteria) {
      case "review":
        sortedProducts.sort((a, b) => b.reviewCnt - a.reviewCnt);
        break;
      case "highPrice":
        sortedProducts.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case "lowPrice":
        sortedProducts.sort((a, b) => a.salePrice - b.salePrice);
        break;
      default:
        break;
    }

    setProducts(sortedProducts);
  };

  const handleCardClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  return (
    <div>
      <Button1 onClick={() => handleFilter("review")}>리뷰 많은순</Button1>
      <Button onClick={() => handleFilter("highPrice")}>가격 높은순</Button>
      <Button2 onClick={() => handleFilter("lowPrice")}>가격 낮은순</Button2>
      <Container>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleCardClick(product.id)}
          >
            <ImageWrapper>
              <ProductImage
                src={`${process.env.REACT_APP_API_BASE_URL}/images/${product.imageUrl}`}
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
              <Original>{product.normalPrice.toLocaleString()}원</Original>
              <Discount>{product.salePrice.toLocaleString()}원</Discount>
            </Product>
            <TagContainer>
              {product.tag &&
                product.tag
                  .split("_")
                  .map((tag, tagIndex) => <Tag key={tagIndex}>{tag}</Tag>)}
            </TagContainer>
          </ProductCard>
        ))}
      </Container>
    </div>
  );
};

export default Filtering;
