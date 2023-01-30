import Header from "@components/common/Header/Header";
import HtmlHead from "@components/common/HtmlHead";
import Loader from "@components/common/loader/loader";
import Modal from "@components/common/Modal";
import TopNav from "@components/common/Nav/TopNav";
import { Router } from "next/router";
import React from "react";

const ComponentsRoot = ({
  component,
  router,
}: {
  component: JSX.Element;
  router: Router;
}) => {
  const Component = () => component;
  return (
    <>
      <Loader />
      <HtmlHead />
      <Header currentPath={router.pathname} />
      <TopNav currentPath={router.pathname} />
      <Component />
      <Modal />
    </>
  );
};

export default React.memo(ComponentsRoot);
