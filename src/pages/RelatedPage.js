import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/MainPage/Header";
import ProductList from "../components/RelatedPage/ProductList";

const SectionInfo = styled.div`
  color: black;
  font-family: "KIMM_Light";
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
  width: 1180px;
  display: flex;
  align-items: center;
  margin-top: 38px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 10px;
  border: 1px solid #b2d23e;
  display: inline-flex;
  height: 17px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const RelatedPage = () => {
  const location = useLocation();
  const { sectionTitle } = location.state || {};

  return (
    <>
      <Header />
      <SectionInfo>
        <Title>#{sectionTitle}</Title>&nbsp;에 대한 제품입니다
      </SectionInfo>
      <ProductList />
    </>
  );
};

export default RelatedPage;
