import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserInput from "../components/LoginPage/UserInput";
import LoginButton from "../components/LoginPage/LoginButton";
import backgroundImage from "../img/LoginPage.png";
import logo from "../img/logo.svg";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 58px;
  height: 64px;
  margin-right: 8px;
  margin-bottom: 13px;
  margin-top: 0px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 70px;
  margin-bottom: 0px;
`;

const SubTitle = styled.div`
  font-family: "KIMM_Bold";
  color: #cbcbcb;
  font-size: 20px;
  margin-bottom: 38px;
`;

const SubTitle2 = styled.div`
  font-family: "KIMM_Bold";
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 38px;
`;

const Email = styled.div`
  font-family: "Pretendard-Regular";
  color: white;
  font-size: 14px;
  width: 430px;
  margin-bottom: 0;
  margin-top: 13.24px;
`;

const UserFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 531px;
  border-radius: 10px;
  font-size: 14px;
  font-family: "Pretendard-Regular";
`;

const ErrorMessage = styled.div`
  width: 430px;
  margin-top: 3px;
  margin-bottom: 7px;
  color: ${({ isInvalid, touched }) => {
    if (!touched) return "#C5C5C5";
    return isInvalid ? "#B2D23E" : "#A1A1A1";
  }};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const Contatin = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-right: 38px;
  margin-top: 0px;
`;

const Div = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: white;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const SignButton = styled.button`
  background: none;
  border: 1px solid #b2d23e;
  border-radius: 10px;
  color: #b2d23e;
  cursor: pointer;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  padding: 8px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  text-align: start;
  width: 430px;
  margin-top: 16.98px;
  padding-left: 0px;

  &:hover {
    text-decoration: underline;
  }

  span {
    font-weight: bold;
  }
`;

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [userEmailTouched, setUserEmailTouched] = useState(false);
  const [userPasswordTouched, setUserPasswordTouched] = useState(false);

  useEffect(() => {
    setUserEmailTouched(false);
    setUserPasswordTouched(false);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));

    if (name === "email") setUserEmailTouched(true);
    if (name === "password") setUserPasswordTouched(true);
  };

  const isInvalidUserEmail =
    userEmailTouched &&
    (!userInfo.email.includes("@") || !userInfo.email.includes("."));
  const isInvalidUserPassword =
    userPasswordTouched &&
    (userInfo.password.length < 8 ||
      !/[a-zA-Z]/.test(userInfo.password) ||
      !/[0-9]/.test(userInfo.password));

  const isValidUserEmail = !isInvalidUserEmail && userEmailTouched;
  const isValidUserPassword = !isInvalidUserPassword && userPasswordTouched;

  const isValid = isValidUserEmail && isValidUserPassword;

  const navigate = useNavigate();

  const goSignupPage = () => {
    navigate("/Medic/SignUpPage");
  };

  const loginProcess = () => {
    const apiUrl = `http://52.78.188.110:8001/api/login`;
    console.log("Login attempt to URL:", apiUrl);
    console.log("Login attempt:", {
      email: userInfo.email,
      password: userInfo.password,
    });

    fetch(apiUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);
        if (data.id) {
          localStorage.setItem("userEmail", userInfo.email);
          localStorage.setItem("userNickname", data.name);
          navigate("/main");
        } else {
          alert(data.message || "가입되지 않은 정보입니다.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <Container>
      <Contatin>
        <Div>아직 계정이 없으신가요?</Div>
        <SignButton onClick={goSignupPage}>무료로 시작하기</SignButton>
      </Contatin>
      <UserFrame onChange={handleInputChange}>
        <Logo>
          <LogoImage src={logo} alt="Logo" />
          <Title>MEDIC</Title>
        </Logo>
        <Logo>
          <SubTitle>건강기능식품에</SubTitle>
          <div style={{ width: "5px" }} />
          <SubTitle2>신뢰</SubTitle2>
          <SubTitle>를 더하다</SubTitle>
        </Logo>
        <Email>Email address</Email>
        <UserInput
          type="text"
          placeholder=""
          value={userInfo.email}
          name="email"
        />
        <ErrorMessage
          isInvalid={isInvalidUserEmail}
          touched={userEmailTouched}
          isVisible={isInvalidUserEmail || !userEmailTouched}
        >
          이메일 주소를 입력해주세요.
        </ErrorMessage>
        <Email>Password</Email>
        <UserInput
          type="password"
          placeholder=""
          value={userInfo.password}
          name="password"
        />
        <ErrorMessage
          isInvalid={isInvalidUserPassword}
          touched={userPasswordTouched}
          isVisible={isInvalidUserPassword || !userPasswordTouched}
        >
          영문, 숫자 포함 8자 이상으로 입력해주세요.
        </ErrorMessage>
        <ActionButton>
          <span>비밀번호</span>를 잊으셨나요?
        </ActionButton>
        <LoginButton text="로그인" disabled={!isValid} onClick={loginProcess} />
      </UserFrame>
    </Container>
  );
};

export default LoginPage;
