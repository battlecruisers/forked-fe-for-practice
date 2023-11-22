import React from "react";
import { Container, ArrowBox, RightIcons, HeadingText } from "./CommonHeader.ts";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const CommonHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const getPageName = () => {
    switch (pathname) {
      case "/signup":
        return "회원가입";
      case "/login":
        return "로그인";
      case "/search":
        return "검색";
      case "/cart":
        return "장바구니";
      case "/accommodation":
        return "모든 숙소";
      case "/reservation":
        return "예약";
      case "/profile":
        return "마이 페이지";
      default:
        return " ";
    }
  };

  //이후 상세 숙소 등에서도 필요
  const isMatchingPath = ["/signup", "/login", "/cart", "/accommodation", "/profile"].includes(pathname);

  return (
    <Container>
      <ArrowBox
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack />
      </ArrowBox>
      <div>
        <HeadingText>{getPageName()}</HeadingText>
      </div>
      <RightIcons>
        {isMatchingPath && (
          <Link to="/search">
            <IoSearch />
          </Link>
        )}
        <Link to="/">
          <BiHome />
        </Link>
      </RightIcons>
    </Container>
  );
};

export default CommonHeader;
