import React from "react";
import Header from "../components/MainPage/Header";
import Filtering from "../components/AllProductPage/Filtering";
import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 39px;
  margin-bottom: 37px;
`;

const Message = styled.div`
  font-family: "KIMM_Light";
  font-size: 18px;
`;

const Highlight = styled.div`
  font-family: "KIMM_Light";
  font-size: 18px;
  color: #b2d23e;
`;

const Div = styled.div`
  display: flex;
  width: 1200px;
`;

const Page = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  color: #8c8c8c;
`;

const HighlightPage = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  color: black;
`;

const Div2 = styled.div`
  display: flex;
  margin-top: 81px;
  margin-bottom: 73.57px;
`;

const AllProductPage = () => {
  return (
    <>
      <Header />
      <Div>
        <MessageContainer>
          <Highlight>MEDIC</Highlight>
          <Message>의 전체 상품입니다!</Message>
        </MessageContainer>
      </Div>
      <Filtering />
      <Page>
        <Div2>
          <HighlightPage>&lt;&nbsp;&nbsp;&nbsp;&nbsp; 1</HighlightPage>
          &nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp;&nbsp;
          3&nbsp;&nbsp;&nbsp;&nbsp; 4&nbsp;&nbsp;&nbsp;&nbsp;
          5&nbsp;&nbsp;&nbsp;&nbsp; <HighlightPage>&gt;</HighlightPage>
        </Div2>
      </Page>
    </>
  );
};

export default AllProductPage;
