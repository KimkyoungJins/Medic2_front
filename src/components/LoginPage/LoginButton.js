import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 430px;
  height: 32px;
  border-radius: 10px;
  color: white;
  background-color: #b2d23e;
  margin-top: 47px;
  margin-bottom: 50px;
  border: none;
  font-size: 16px;
  font-family: "Pretendard-Regular";
`;
const LoginButton = ({ text, onClick, disabled }) => {
  return (
    <Button className="userButton" onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default LoginButton;
