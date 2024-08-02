import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 430px;
  height: 32px;
  border-radius: 10px;
  color: white;
  background-color: #90af20;
  border: none;
  font-size: 16px;
  font-family: "Pretendard-Regular";
`;
const LoginButton2 = ({ text, onClick, disabled }) => {
  return (
    <Button className="userButton" onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default LoginButton2;
