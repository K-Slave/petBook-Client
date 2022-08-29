import Cookies from "js-cookie";
import Link from "next/link";
import styled from "styled-components";
import SimpleButton from "./SimpleButton";

const PersonalMenuButton = styled(SimpleButton)`
  position: relative;
  left: 35px;
`;

const PersonalMenu = () => {
  const token = Cookies.get("access_token");

  return (
    <Link href={token ? "마이페이지" : "로그인"} passHref>
      <PersonalMenuButton>{token ? "마이페이지" : "로그인"}</PersonalMenuButton>
    </Link>
  );
};

export default PersonalMenu;
