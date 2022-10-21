import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { BorderButton } from "./common/Button/Button";

const SideNav = styled.div<{ showNav: boolean }>`
  border: 1px solid lightgray;
  background-color: #fff;
  border-radius: 5px;
  height: 80vh;
  min-height: 500px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 30px;
    left: 0px;
    transform: ${({ showNav }) =>
      showNav ? "translateX(0%)" : "translate(-110%)"};
    transition: all 0.4s linear;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }
`;

const Button = styled(BorderButton)`
  font-size: 1rem;
  font-weight: normal;
`;

const MyPageItem = styled.li<{ current: number; menuId: number }>`
  text-align: center;
  padding: 1rem 0;
  text-decoration: ${({ current, menuId }) =>
    current === menuId ? "underline" : "none"};
  cursor: pointer;
  & + & {
    margin-top: 0.5rem;
  }
`;

interface MyPageNavProps {
  current: number;
  showNav: boolean;
  setCurrent: (menuId: number) => void;
  handleCloseNav: () => void;
}

export const MYPAGE_MENUS = [
  {
    id: 0,
    text: "내 정보 설정",
  },
  {
    id: 1,
    text: "내 펫 정보 설정",
  },
  {
    id: 2,
    text: "내 위치 설정",
  },
  {
    id: 3,
    text: "저장된 글 보기",
  },
];

function MyPageNav({
  current,
  setCurrent,
  showNav,
  handleCloseNav,
}: MyPageNavProps) {
  const onClick = (id: number) => {
    setCurrent(id);
    handleCloseNav();
  };
  return (
    <SideNav showNav={showNav}>
      <NavColumn>
        <FaUserCircle />
        <ul>
          {MYPAGE_MENUS.map((menu) => (
            <MyPageItem
              key={menu.id}
              onClick={() => onClick(menu.id)}
              current={current}
              menuId={menu.id}
            >
              {menu.text}
            </MyPageItem>
          ))}
        </ul>
      </NavColumn>
      <Button>회원탈퇴</Button>
    </SideNav>
  );
}

export default MyPageNav;
