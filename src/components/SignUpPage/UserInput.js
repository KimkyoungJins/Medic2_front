import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-family: "Pretendard-Regular";
  background-color: transparent;
  width: 570px;
  border-radius: 7.5px;
  height: 40px;
  border: 1px solid ${({ isInvalid }) => (isInvalid ? "#E45D5D" : "black")};
  text-align: start;
  padding-left: 5px;
  margin-bottom: 3px;
  cursor: pointer;

  &:focus {
    font-family: "Pretendard-Regular";
    text-align: start;
    outline: none;
    border-color: ${({ isInvalid }) => (isInvalid ? "#E45D5D" : "#b2d23e")};
  }
`;

const UserInput2 = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  isInvalid,
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      isInvalid={isInvalid}
      onChange={onChange}
    />
  );
};

export default UserInput2;
