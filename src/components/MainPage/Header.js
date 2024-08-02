import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import up from "../../img/up.svg";
import down from "../../img/down.svg";
import search from "../../img/whitesearch.svg";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  width: 1200px;
  margin-left: 57px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 29px;
  height: 32px;
  margin-right: 4px;
  margin-bottom: 3px;
`;

const Title = styled.div`
  color: #b2d23e;
  font-family: "GongGothicMedium";
  font-size: 35px;
  margin-right: 35px;
`;

const Dropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const DropdownButton = styled.button`
  font-weight: bold;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 45px 10px 16px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  height: 38px;

  &:focus {
    outline: none;
  }
`;

const IMG = styled.img`
  margin-right: 16px;
`;

const DropdownContent = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  top: 40px;
  left: 0;
  width: 120px;
  height: 66px;
  background-color: #b2d23e;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 5px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    text-align: center;
    height: 33px;

    &:hover {
      border-radius: 5px;
      background-color: #99b93b;
    }
  }

  & > div:not(:last-child) {
    border-bottom: 1px solid #8c8c8c;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1.2px solid #b2d23e;
  border-radius: 10px;
  width: 770px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  border: none;
  font-size: 16px;
  flex-grow: 1;
  color: #8c8c8c;
  font-family: "Pretendard-Regular";
  padding: 8px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  border-radius: 0 8px 8px 0;
  background-color: #b2d23e;
  font-family: "Pretendard-Regular";
  border: none;
  height: 38px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #a3c03a;
  }
`;

const SearchIcon = styled.img`
  margin-right: 3px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  justify-content: flex-end;
  padding-right: 62px;
  padding-top: 50px;
`;

const WelcomeMessage = styled.div`
  color: black;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const UserNickname = styled.div`
  color: #b2d23e;
  font-family: "Pretendard-Regular";
  font-size: 14px;
`;

const LogoutButton = styled.button`
  border: 1px solid #8c8c8c;
  border-radius: 10px;
  background-color: #fff;
  color: #8c8c8c;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  cursor: pointer;
  width: 76px;
  height: 29px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #575757;
    border: 1px solid #575757;
  }
`;

const Header = ({ onSearchOptionChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("제품");
  const [userNickname, setUserNickname] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedNickname = localStorage.getItem("userNickname");
    if (storedNickname) {
      setUserNickname(storedNickname);
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    onSearchOptionChange(option);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`http://52.78.188.110:8001/api/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("userNickname"); // 로그아웃 시 닉네임 삭제
        navigate("/");
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLogoClick = () => {
    navigate("/Medic");
  };

  const handleSearch = () => {
    navigate(`/Medic/SearchPage?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <UserContainer>
        <WelcomeMessage>
          <UserNickname>{userNickname}</UserNickname>님 환영합니다!
        </WelcomeMessage>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </UserContainer>
      <HeaderContainer>
        <Logo onClick={handleLogoClick}>
          <LogoImage src={logo} alt="Logo" />
          <Title>MEDIC</Title>
        </Logo>
        <SearchContainer>
          <Dropdown>
            <DropdownButton onClick={toggleDropdown}>
              {selectedOption}
            </DropdownButton>{" "}
            <IMG src={dropdownOpen ? up : down} alt="dropdown icon" />
            <DropdownContent show={dropdownOpen}>
              <div onClick={() => selectOption("제품")}>제품</div>
              <div onClick={() => selectOption("기능")}>기능</div>
            </DropdownContent>
          </Dropdown>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>
            <SearchIcon src={search} alt="search icon" />
            검색하기
          </SearchButton>
        </SearchContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
