import React, { PropsWithChildren } from "react";
import headerImg from "@/image/headerImg";
import ResponsiveImage from "@/stories/common/Image/ResponsiveImage";
import { Container, LogoLink, ContentWap, EmailAddress } from "./Footer.style";

const footerBlackListPage = ["/auth", "/hospitalmap", "/hospital"];

interface Props {
  currentPath: string;
}

const Footer = ({ currentPath }: Props) => {
  return (
    <>
      {footerBlackListPage.includes(currentPath) === false && (
        <Footer.Wrap>
          <Footer.Logo />
          <Footer.Content />
          <Footer.Email />
        </Footer.Wrap>
      )}
    </>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  return <Container>{children}</Container>;
};

const Logo = () => {
  return (
    <LogoLink href="/">
      <ResponsiveImage
        src={headerImg.petbook_logo}
        alt="펫북 로고 타이틀"
        boxwidth="147.35px"
        boxheight="26.65px"
        fill
      />
    </LogoLink>
  );
};

const Content = () => {
  return <ContentWap>우리는 펫북! 조금씩 성장하고 있어요</ContentWap>;
};

const Email = () => {
  return <EmailAddress>petboooklfmlsd@ldfsklf.com</EmailAddress>;
};

Footer.Wrap = Wrap;
Footer.Logo = Logo;
Footer.Content = Content;
Footer.Email = Email;

export default Footer;
