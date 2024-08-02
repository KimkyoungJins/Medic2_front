import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img1 from "../../img/Frame 15537.svg";
import mark from "../../img/Frame 15533.svg";
import search from "../../img/search.svg";
import img2 from "../../img/Frame 15538.svg";
import Modal2 from "./Modal2";
import search2 from "../../img/greensearch.svg";

const Img1 = styled.img`
  width: 1169.999px;
  margin-bottom: 59px;
  height: 63px;
`;

const Mark = styled.img`
  width: 569.76px;
  height: auto;
  margin-bottom: 62px;
`;

const Modal = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
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
  bottom: -19px;
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

const PharmacistContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Pharmacist = styled.button`
  display: inline-flex;
  height: 33px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  border: 1px solid #616625;
  background-color: transparent;
  margin-bottom: 40px;
  color: #616625;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: #abb43f;
    border: 1px solid #abb43f;

    img {
      content: url(${search2});
    }
  }
`;

const SearchIcon = styled.img`
  transition: content 0.3s;
`;

const ProductDetailContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 63px;
`;

const Img2 = styled.img`
  width: 1170px;
  height: 63px;
`;

const ProductDetailText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  color: white;
  font-family: "Pretendard-Regular";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const TableContainer = styled.div`
  width: 1170px;
  overflow: hidden;
  margin-bottom: 186px;
`;

const Table = styled.table`
  width: 1170px;
  border-collapse: collapse;
  font-family: "Pretendard-Regular";
`;

const TableRow = styled.tr`
  border-bottom: 0.4px solid black;
`;

const TableCell = styled.td`
  padding: 15px;
  text-align: center;
  color: #616625;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  &:first-child {
    font-weight: bold;
    border-right: 0.4px solid black;
    width: 30%;
  }
`;

const TableCell2 = styled.td`
  padding: 15px;
  text-align: left;
  color: black;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  white-space: pre-line;
  &:first-child {
    font-weight: bold;
    border-right: 0.4px solid black;
    width: 30%;
  }
`;

const Detail = ({ productId }) => {
  const [data, setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/products/${productId}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handlePharmacistClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal2(false);
  };

  return (
    <>
      <Img1 src={img1} alt="Detail Image" />
      <Mark src={mark} alt="Mark" />
      <PharmacistContainer>
        <Pharmacist onClick={handlePharmacistClick}>
          약사 소견 보러가기
          <SearchIcon src={search} alt="search" />
        </Pharmacist>
        {showModal2 && (
          <Modal>
            <ModalContent>
              해당 제품의 인증을 담당한 약사의 정보와 소견을 살펴보세요
            </ModalContent>
            <ModalButton onClick={handleModalClose}>확인</ModalButton>
            <ModalTriangle />
          </Modal>
        )}
      </PharmacistContainer>
      <ProductDetailContainer>
        <Img2 src={img2} alt="Detail Image" />
        <ProductDetailText>제품 상세정보</ProductDetailText>
      </ProductDetailContainer>
      <TableContainer>
        {data ? (
          <Table>
            <tbody>
              <TableRow>
                <TableCell>제조사명</TableCell>
                <TableCell2>{data.manufacturer}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>제품명</TableCell>
                <TableCell2>{data.name}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>신고번호</TableCell>
                <TableCell2>{data.reportNumber}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>등록일자</TableCell>
                <TableCell2>{data.registerDate}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>유통기한</TableCell>
                <TableCell2>{data.expirationDate}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>섭취량/섭취 방법</TableCell>
                <TableCell2>{data.intakeMethod}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>섭취 시 주의사항</TableCell>
                <TableCell2>{data.ingestPrecaution}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>기능성 내용</TableCell>
                <TableCell2>{data.functionallyContents || "N/A"}</TableCell2>
              </TableRow>
              <TableRow>
                <TableCell>기타 원료</TableCell>
                <TableCell2>{data.otherMaterials}</TableCell2>
              </TableRow>
            </tbody>
          </Table>
        ) : (
          <p>Loading...</p>
        )}
      </TableContainer>
      {showModal && <Modal2 onClose={handleCloseModal} />}
    </>
  );
};

export default Detail;
