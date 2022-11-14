import Cookies from "js-cookie";
import Link from "next/link";
import React, { PropsWithChildren, useEffect, useState } from "react";
import styled from "styled-components";
import SimpleButton from "./SimpleButton";

const PersonalMenuButton = styled(SimpleButton)`
  position: relative;
  left: 35px;
`;

const PersonalMenu = React.forwardRef((props: PropsWithChildren<any>) => {
  const { children } = props;
  const [token, setToken] = useState("");

  useEffect(() => {
    const cookie = Cookies.get("access_token");
    setToken(cookie || "");
  }, []);

  return (
    <Link href={token ? "/mypage" : "/login"} passHref>
      <PersonalMenuButton {...props}>{children}</PersonalMenuButton>
    </Link>
  );
});

export default PersonalMenu;
