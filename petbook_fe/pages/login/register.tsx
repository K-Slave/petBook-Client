import HtmlHeader from "../../components/common/HtmlHeader";
import TopNav from "../../components/TopNav";
import ValidationInput from "../../components/common/ValidationInput";

//
import styled from "styled-components";

const Main = styled.main`
  height: calc(100vh - 61px);
  overflow: auto;
  background-color: var(--bg);

  .formWrap {
    max-width: 679px;
    width: 100%;
    margin: 0 auto;
    margin-top: 76px;
    > div {
      margin-bottom: 26px;
      &:last-child {
        margin-bottom: 0;
      }
      &.flex {
        > div {
          width: 50%;
          &:first-child {
            margin-right: 9px;
          }
        }
      }
    }
    .box {
      position: relative;
      label {
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translateY(-50%);
        color: #000000;
        opacity: 68%;
      }
      input {
        padding-left: 140px;
        line-height: 30px;
        &::placeholder {
          color: #b7b7b7;
        }
      }
    }
    .err_box {
      color: #ff6e4e;
      line-height: 30px;
      margin-top: 4px;
    }
  }
`;

const Register = () => {
  return (
    <>
      <HtmlHeader />
      <TopNav />
      <Main>
        <div className="formWrap">
          <ValidationInput current={"이메일"} />
          <ValidationInput current={"인증번호"} />
          <div className="flex">
            <ValidationInput current={"이름"} />
            <ValidationInput current={"생년월일"} />
          </div>
          <ValidationInput current={"닉네임"} />
          <ValidationInput current={"동물종류"} />
        </div>
      </Main>
    </>
  );
};
export default Register;
