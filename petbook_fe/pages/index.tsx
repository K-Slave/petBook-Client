import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import styled from "styled-components";
import Responsive from "../components/common/Responsive";

//components
import TopNav from "../components/TopNav";
import Keyvisual from "../components/Keyvisual";
import { Box } from "../components/common/Box";
import HtmlHeader from "../components/common/HtmlHeader";

const Home: NextPage = () => {
  return (
    <div>
      <HtmlHeader />
      {/* 상단영역 */}

      <TopNav />
      <Keyvisual />

      {/* 본문영역 */}

      <div className={styles.container}>
        <Box boxType='content' active={true} content={<div></div>} />
        {/* <Box boxType='content' active={true} content={"queryData"} /> */}
      </div>
    </div>
  );
};

export default Home;
