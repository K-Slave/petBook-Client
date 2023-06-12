import React, { PropsWithChildren } from "react";

import ResponsiveImage from "../ResponsiveImage";
import {
  FooterContainer,
  FooterLogoLink,
  FooterContent,
  FooterEmailAddress,
} from "./Footer.style";
import headerImg from "@/image/headerImg";

interface Props {
  currentPath: string;
}

const Footer = ({ currentPath }: Props) => {
  return (
    <Footer.Wrap>
      <Footer.Logo />
      <Footer.Content />
      <Footer.Email />
    </Footer.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <FooterContainer>{children}</FooterContainer>;
};

const Logo = () => {
  return (
    <FooterLogoLink href="/">
      <ResponsiveImage
        src={headerImg.petbook_logo}
        alt="펫북 로고 타이틀"
        boxwidth="147.35px"
        boxheight="26.65px"
        fill
      />
    </FooterLogoLink>
  );
};

const Content = () => {
  return <FooterContent>우리는 펫북! 조금씩 성장하고 있어요</FooterContent>;
};

const Email = () => {
  return <FooterEmailAddress>petboooklfmlsd@ldfsklf.com</FooterEmailAddress>;
};

Footer.Wrap = React.memo(Wrap);
Footer.Logo = Logo;
Footer.Content = Content;
Footer.Email = Email;

export default Footer;
