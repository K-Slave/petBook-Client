import useLoginStore from "@lib/hooks/store/useLoginStore";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { AnchorHTMLAttributes, PropsWithChildren } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const LoginLink = (props: PropsWithChildren<Props>) => {
  const loginStore = useLoginStore();
  const router = useRouter();

  const onClick = () => {
    loginStore.setPrevPath(router.asPath);
  };

  return <Link onClick={onClick} href="/auth" {...props}></Link>;
};

export default LoginLink;
