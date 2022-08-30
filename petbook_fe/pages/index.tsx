import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

//components
import Keyvisual from "../components/Keyvisual";
import { Box } from "../components/common/Box";
import KnowhowPaperBox from "../components/common/PaperBox/Interface/KnowhowPaperBox";

const Home: NextPage = () => {
  return (
    <>
      {/* <HtmlHeader /> */}
      {/* 상단영역 */}

      {/* <TopNav /> */}
      <Keyvisual />

      {/* 본문영역 */}

      <KnowhowPaperBox />

      <div className={styles.container}>
        <Box boxType='content' active={true} content={<div></div>} />
        {/* <Box boxType='content' active={true} content={"queryData"} /> */}
      </div>
    </>
  );
};

export default Home;
