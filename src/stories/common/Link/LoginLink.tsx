import { memoizedValue } from "@lib/globalConst";
import useLoginStore from "@lib/hooks/store/useLoginStore";
import Cookies from "js-cookie";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const LoginLink = (props: PropsWithChildren<Props>) => {
  const router = useRouter();

  const onClick = () => {
    Cookies.set(memoizedValue.prevPath, router.asPath);
  };

  return <Link onClick={onClick} href="/auth" {...props}></Link>;
};

export default LoginLink;
