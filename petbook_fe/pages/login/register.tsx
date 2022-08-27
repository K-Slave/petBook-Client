import HtmlHeader from "../../components/common/HtmlHeader";
import TopNav from "../../components/TopNav";
import ValidationInput from "../../components/common/validationInput";

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
  }
`;

const Register = () => {
  return (
    <>
      <HtmlHeader />
      <TopNav />
      <Main>
        <div className="formWrap">
          <ValidationInput current={"dd"} />
        </div>
      </Main>
    </>
  );
};
export default Register;
