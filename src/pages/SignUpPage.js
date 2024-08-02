import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import SignUpButton from "../components/SignUpPage/SignUpButton";
import logo from "../img/logo.svg";
import UserInput2 from "../components/SignUpPage/UserInput";
import useDetectClose from "../components/SignUpPage/UseDetectClose";
import arrow from "../img/arrow.png";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 45px;
  height: 52px;
  margin-right: 4px;
  margin-top: 28px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 50.26px;
  margin-top: 40px;
`;

const Email = styled.div`
  font-family: "Pretendard-Regular";
  color: ${({ isInvalid }) => (isInvalid ? "#E45D5D" : "black")};
  font-size: 14px;
  width: 570px;
  margin-bottom: 6px;
  margin-top: 13.24px;
`;

const GEmail = styled.div`
  font-family: "Pretendard-Regular";
  color: black;
  font-size: 14px;
  width: 570px;
  margin-bottom: 6px;
  margin-top: 20.24px;
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
  width: 570px;
  margin-top: 3px;
  margin-bottom: 7px;
  color: ${({ isInvalid, touched }) => {
    if (!touched) return "#C5C5C5";
    return isInvalid ? "#E45D5D" : "#A1A1A1";
  }};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  border: none;
  padding: 5px;
  box-sizing: border-box;
`;

const Error = styled.div`
  width: 570px;
  margin-top: 3px;
  margin-bottom: 7px;
  color: #a1a1a1;
`;

const ArrowImage = styled.img`
  position: absolute;
  top: 11px;
  right: 14px;
  ${({ isFocused }) =>
    isFocused &&
    css`
      filter: invert(53%) sepia(33%) saturate(577%) hue-rotate(33deg)
        brightness(95%) contrast(92%);
    `}
`;

const HashtagContainer = styled.div`
  position: relative;
  width: 579px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 579px;
`;

const HashtagInput = styled.input`
  font-family: "Pretendard-Regular";
  background-color: transparent;
  width: 570px;
  border-radius: 7.5px;
  height: 40px;
  border: 1px solid black;
  text-align: start;
  padding-left: 5px;
  margin-bottom: 5px;
  cursor: pointer;

  &:focus {
    font-family: "Pretendard-Regular";
    text-align: start;
    outline: none;
    border-color: #b2d23e;

    & + ${ArrowImage} {
      filter: invert(53%) sepia(33%) saturate(577%) hue-rotate(33deg)
        brightness(95%) contrast(92%);
    }
  }
`;

const DropDownList = styled.ul`
  border: 1px solid #b2d23e;
  border-radius: 7.5px;
  background-color: white;
  z-index: 10;
  list-style: none;
  padding: 10px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  background-color: ${({ isActive }) => (isActive ? "#effaca" : "#ececec")};
  border-radius: 7.5px;
  cursor: pointer;
  height: 32px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background-color: #effaca;
    font-weight: bold;
  }
`;

const DrugInUseList = styled.ul`
  border: 1px solid #b2d23e;
  margin: 0px;
  border-radius: 7.5px;
  width: 578px;
  padding: 0;
`;

const SupplementItem = styled.li`
  background-color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  height: 37px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    background-color: #effaca;
    font-weight: bold;
  }
`;

const GenderList = styled.ul`
  border: 1px solid #b2d23e;
  margin: 0px;
  border-radius: 7.5px;
  width: 578px;
  height: 75px;
  padding: 0;
`;

const GListItem = styled.li`
  background-color: #fff;
  border-radius: 7.5px;
  cursor: pointer;
  height: 37px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: start;

  &:hover {
    background-color: #effaca;
    font-weight: bold;
  }

  &:active {
    background-color: #effaca;
  }
`;

const Tag = styled.div`
  border: 1px solid #b2d23e;
  border-radius: 10px;
  padding: 8px;
  color: #b2d23e;
`;

const SignUpPage = () => {
  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    userPassword: "",
    userNickname: "",
    birthYear: "",
    gender: "",
    healthHashTag: [],
    supplementTypes: [],
  });

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [nicknameTouched, setNicknameTouched] = useState(false);
  const [birthdayTouched, setBirthdayTouched] = useState(false);
  const [isGenderFocused, setIsGenderFocused] = useState(false);
  const [isHashtagFocused, setIsHashtagFocused] = useState(false);

  const genderList = ["남성", "여성"];
  const supplementList = [
    "없음",
    "관절솔루션 보스웰리아 7",
    "굿바디 카르니틴 1000",
    "세이헬스 녹차추출물",
    "피부건강엔 N 실키어린 콜라겐",
    "닥터 비타민 D 200IU",
    "엑스트라 스트렝스 징코",
    "베타 알라닌",
    "내츄럴플러스 알티지 오메가3",
  ];
  const hashtagList = [
    "피부건강",
    "혈당 조절",
    "기억력개선",
    "체지방 감소",
    "관절/뼈건강",
    "면역기능개선",
    "운동수행 능력",
    "혈중 중성지방 개선",
  ];

  const genderDropDownRef = useRef();
  const hashtagDropDownRef = useRef();
  const supplementDropDownRef = useRef();

  const [isOpenGender, setIsOpenGender] = useDetectClose(
    genderDropDownRef,
    false
  );
  const [isOpenHashtag, setIsOpenHashtag] = useDetectClose(
    hashtagDropDownRef,
    false
  );
  const [isOpenSupplement, setIsOpenSupplement] = useDetectClose(
    supplementDropDownRef,
    false
  );

  const handleSupplementClick = (supplement) => {
    setUserInfo((userInfo) => {
      let newsupplementTypes;
      if (supplement === "없음") {
        newsupplementTypes = [];
      } else {
        newsupplementTypes = [...userInfo.supplementTypes];
        if (newsupplementTypes.includes(supplement)) {
          newsupplementTypes.splice(newsupplementTypes.indexOf(supplement), 1);
        } else {
          newsupplementTypes.push(supplement);
        }
      }
      return { ...userInfo, supplementTypes: newsupplementTypes };
    });
  };

  const handleSupplementInputClick = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    setIsOpenSupplement((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        supplementDropDownRef.current &&
        !supplementDropDownRef.current.contains(event.target)
      ) {
        setIsOpenSupplement(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    if (
      isOpenSupplement &&
      supplementDropDownRef.current &&
      !supplementDropDownRef.current.contains(e.target)
    ) {
      setIsOpenSupplement(false);
    } else {
      setIsOpenSupplement(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleDropdown);
    return () => {
      document.removeEventListener("click", toggleDropdown);
    };
  }, [isOpenSupplement]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));

    if (name === "userEmail") {
      setEmailTouched(true);
    }
    if (name === "userPassword") setPasswordTouched(true);
    if (name === "userNickname") setNicknameTouched(true);
    if (name === "birthYear") setBirthdayTouched(true);
  };

  const handleHashtagRemove = (hashtag) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      healthHashTag: userInfo.healthHashTag.filter((item) => item !== hashtag),
    }));
  };

  const handleHashtagClick = (hashtag) => {
    setUserInfo((userInfo) => {
      const newhealthHashTag = [...userInfo.healthHashTag];
      if (newhealthHashTag.includes(hashtag)) {
        newhealthHashTag.splice(newhealthHashTag.indexOf(hashtag), 1);
      } else if (newhealthHashTag.length < 3) {
        newhealthHashTag.push(hashtag);
      }
      return { ...userInfo, healthHashTag: newhealthHashTag };
    });
  };

  const handleGenderClick = (gender) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      gender: gender,
    }));
    setIsOpenGender(false);
  };

  const isInvalidEmail =
    emailTouched &&
    (!userInfo.userEmail.includes("@") || !userInfo.userEmail.includes("."));

  const isInvalidPassword =
    passwordTouched &&
    (userInfo.userPassword.length < 8 ||
      !/[a-zA-Z]/.test(userInfo.userPassword) ||
      !/[0-9]/.test(userInfo.userPassword));

  const isInvalidNickname =
    nicknameTouched &&
    (userInfo.userNickname.length > 20 || userInfo.userNickname.length === 0);

  const isInvalidBirthday =
    birthdayTouched &&
    (userInfo.birthYear.length !== 6 || !/[0-9]/.test(userInfo.birthYear));

  const isValidEmail = !isInvalidEmail && emailTouched;
  const isValidPassword = !isInvalidPassword && passwordTouched;
  const isValidNickname = !isInvalidNickname && nicknameTouched;
  const isValidBirthday = !isInvalidBirthday && birthdayTouched;
  const isValidhealthHashTag =
    userInfo.healthHashTag.length >= 1 && userInfo.healthHashTag.length <= 3;

  const isValid =
    isValidEmail &&
    isValidPassword &&
    isValidNickname &&
    isValidBirthday &&
    isValidhealthHashTag;

  const navigate = useNavigate();

  const signUpProcess = () => {
    fetch(`http://52.78.188.110:8001/api/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: userInfo.userEmail,
        password: userInfo.userPassword,
        name: userInfo.userNickname,
        birthDate: userInfo.birthYear,
        genderType: userInfo.gender,
        tagTypes: userInfo.healthHashTag,
        supplementTypes: userInfo.supplementTypes,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          localStorage.setItem("token", data.message);
          localStorage.setItem("userNickname", userInfo.userNickname);
          navigate("/medic/SignUpPage2");
        } else {
          alert("가입에 실패했습니다. 다시 시도해 주세요.");
        }
      })
      .catch((error) => {
        console.error("Sign up error:", error);
        console.log("API BASE URL:", process.env.REACT_APP_API_BASE_URL);

        alert("가입 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
      });
  };

  return (
    <Container>
      <UserFrame onChange={handleInputChange}>
        <Logo>
          <LogoImage src={logo} alt="Logo" />
          <Title>MEDIC</Title>
        </Logo>

        <Email isInvalid={isInvalidEmail}>아이디</Email>

        <UserInput2
          type="text"
          placeholder=""
          value={userInfo.userEmail}
          name="userEmail"
          isInvalid={isInvalidEmail}
          onChange={handleInputChange}
        />
        <ErrorMessage
          isInvalid={isInvalidEmail}
          touched={emailTouched}
          isVisible={isInvalidEmail || !emailTouched}
        >
          이메일 형식으로 입력해주세요.
        </ErrorMessage>

        <Email isInvalid={isInvalidPassword}>비밀번호</Email>
        <UserInput2
          type="password"
          placeholder=""
          value={userInfo.userPassword}
          name="userPassword"
          isInvalid={isInvalidPassword}
          onChange={handleInputChange}
        />

        <ErrorMessage
          isInvalid={isInvalidPassword}
          touched={passwordTouched}
          isVisible={isInvalidPassword || !passwordTouched}
        >
          영문, 숫자 포함 8자 이상 입력해주세요.
        </ErrorMessage>

        <Email isInvalid={isInvalidNickname}>닉네임</Email>
        <UserInput2
          type="text"
          placeholder=""
          value={userInfo.userNickname}
          name="userNickname"
          isInvalid={isInvalidNickname}
          onChange={handleInputChange}
        />
        <ErrorMessage
          isInvalid={isInvalidNickname}
          touched={nicknameTouched}
          isVisible={isInvalidNickname || !nicknameTouched}
        >
          최대 20글자로 입력해주세요.
        </ErrorMessage>

        <Email isInvalid={isInvalidBirthday}>생년월일</Email>
        <UserInput2
          type="text"
          placeholder=""
          value={userInfo.birthYear}
          name="birthYear"
          isInvalid={isInvalidBirthday}
          onChange={handleInputChange}
        />

        <ErrorMessage
          isInvalid={isInvalidBirthday}
          touched={birthdayTouched}
          isVisible={isInvalidBirthday || !birthdayTouched}
        >
          생년월일 6자리를 입력해주세요.
        </ErrorMessage>

        <Email>성별</Email>
        <HashtagContainer ref={genderDropDownRef}>
          <HashtagInput
            onFocus={() => setIsGenderFocused(true)}
            onBlur={() => setIsGenderFocused(false)}
            onClick={() => setIsOpenGender(!isOpenGender)}
            type="text"
            value={userInfo.gender || "성별"}
            readOnly
          />
          <ArrowImage src={arrow} alt="Arrow" isFocused={isGenderFocused} />
          {isOpenGender && (
            <GenderList>
              {genderList.map((value, index) => (
                <GListItem key={index} onClick={() => handleGenderClick(value)}>
                  {value}
                </GListItem>
              ))}
            </GenderList>
          )}
        </HashtagContainer>

        <GEmail>건강 맞춤형 해시태그</GEmail>
        <HashtagContainer ref={hashtagDropDownRef}>
          <HashtagInput
            onFocus={() => setIsHashtagFocused(true)}
            onBlur={() => setIsHashtagFocused(false)}
            onClick={() => setIsOpenHashtag(!isOpenHashtag)}
            type="text"
            value={"해시태그"}
            readOnly
          />

          <ArrowImage src={arrow} alt="Arrow" isFocused={isHashtagFocused} />
          {isOpenHashtag && (
            <DropDownList>
              {hashtagList.map((value, index) => (
                <ListItem
                  key={index}
                  isActive={userInfo.healthHashTag.includes(value)}
                  onClick={() => handleHashtagClick(value)}
                >
                  {userInfo.healthHashTag.includes(value)
                    ? `${userInfo.healthHashTag.indexOf(value) + 1} | ${value}`
                    : value}
                </ListItem>
              ))}
            </DropDownList>
          )}
          {userInfo.healthHashTag.map((hashtag, index) => (
            <Tag
              key={index}
              style={{
                display: "inline-block",
                marginTop: "5px",
                marginRight: "14px",
              }}
            >
              <span>{hashtag}</span>
              <span
                style={{ cursor: "pointer", marginLeft: "4px" }}
                onClick={() => handleHashtagRemove(hashtag)}
              >
                X
              </span>
            </Tag>
          ))}
        </HashtagContainer>
        {userInfo.healthHashTag.length === 0 && (
          <Error>최소 1개, 최대 3개의 해시태그를 선택해주세요.</Error>
        )}
        <GEmail>복용 중인 약 혹은 건강기능식품</GEmail>
        <HashtagContainer ref={supplementDropDownRef}>
          <HashtagInput
            placeholder="없음"
            readOnly
            onClick={handleSupplementInputClick}
            value={
              userInfo.supplementTypes.length > 0
                ? userInfo.supplementTypes.join(", ")
                : ""
            }
          />
          <ArrowImage src={arrow} onClick={handleSupplementInputClick} />
          {isOpenSupplement && (
            <DrugInUseList>
              {supplementList.map((supplement) => (
                <SupplementItem
                  key={supplement}
                  isActive={userInfo.supplementTypes.includes(supplement)}
                  onClick={() => handleSupplementClick(supplement)}
                >
                  {supplement}
                </SupplementItem>
              ))}
            </DrugInUseList>
          )}
        </HashtagContainer>
        <TagContainer>
          {userInfo.supplementTypes.map((supplement, index) => (
            <Tag
              key={index}
              onClick={() => handleSupplementClick(supplement)}
              style={{
                display: "inline-block",
                marginTop: "5px",
                marginRight: "14px",
              }}
            >
              {supplement} x
            </Tag>
          ))}
        </TagContainer>
        <SignUpButton
          onClick={() => {
            signUpProcess();
          }}
          text="가입하기"
          disabled={!isValid}
        />
      </UserFrame>
    </Container>
  );
};

export default SignUpPage;
