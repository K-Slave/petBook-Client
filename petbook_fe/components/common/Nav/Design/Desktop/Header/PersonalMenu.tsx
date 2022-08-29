import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SimpleButton from "./SimpleButton";

const PersonalMenuButton = styled(SimpleButton)`
  position: relative;
  left: 35px;
`;

const PersonalMenu = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const cookie = Cookies.get("access_token");
    setToken(cookie ? cookie : "");
  }, []);

  return (
    <Link href={token ? "/mypage" : "/login"} passHref>
      <PersonalMenuButton>{token ? "마이페이지" : "로그인"}</PersonalMenuButton>
    </Link>
  );
};

export default PersonalMenu;
