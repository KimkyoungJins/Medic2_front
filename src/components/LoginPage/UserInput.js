import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 0.5px solid #fff;
  width: 430px;
  height: 50px;
  color: white;
  padding-bottom: 0px;
  font-family: "Pretendard-Regular";

  &:focus {
    font-family: "Pretendard-Regular";
    outline: none;
    border-bottom: 0.5px solid #fff;
  }
`;

const UserInput = ({ type, placeholder, value, name, onChange }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default UserInput;
