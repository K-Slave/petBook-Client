import React from "react";
import styled from "styled-components";
import styles from "../styles/Home.module.scss";

//

const Main = styled.div`
  height: 600px;
  width: 100%;
  color: white;
  overflow: hidden;

  background-image: url(/img/main-06.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 80%;
  > div {
    h1 {
      font-size: 70px;
      text-align: right;
      // font-family: "Bangers", cursive;
      font-family: "Indie Flower", cursive;
      letter-spacing: 10px;
      margin-top: 300px;
    }
  }
`;

function Keyvisual() {
  return (
    <Main>
      <div className={styles.container}>
        <h1>petBook</h1>
      </div>
    </Main>
  );
}

export default Keyvisual;
