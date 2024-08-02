import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Baguni from "../../img/Baguni.png";

const Container = styled.div`
  margin-bottom: 102px;
  margin-top: 65px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  padding: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
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

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const { state } = useLocation();
  const sectionTitle = state ? state.sectionTitle : null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = sectionTitle
    ? products.filter((product) => product.tag.includes(sectionTitle))
    : products;

  const handleCardClick = (productId) => {
    navigate(`/Medic/InformationPage/${productId}`);
  };

  return (
    <Container>
      <ProductGrid>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => handleCardClick(product.id)}
          >
            <ImageWrapper>
              <ProductImage
                src={`/images/${product.imageUrl}`}
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
      </ProductGrid>
    </Container>
  );
};

export default ProductList;
