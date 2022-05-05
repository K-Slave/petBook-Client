import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import req from "../lib/api/projectAPI";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import Responsive from "../components/common/Responsive";
import { useEffect, useState } from "react";

//components
import TopNav from "../components/TopNav";
import Keyvisual from "../components/Keyvisual";
import { Box } from "../components/common/Box";

const CardSection = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
