import styled from "styled-components";
import ValidationInput from "@components/common/ValidationInput";
// import PassInputRadio from "@components/register/PassInputRadio";

const PassCheckWrap = styled.ul`
  display: flex;
  margin-top: 12px;
  li {
    margin-right: 20px;
    input,
    progress {
      accent-color: green;
    }
    label {
      margin-left: 7px;
      color: #ccc4c2;
      &.active {
        color: #00cf46;
      }
    }
  }
`;

const PasswordInput = () => {
  //check의 false ture 로 값 조절
  const PassCheckType = [
    {
      type: "영어 대문자 포함",
      value: 1,
      check: true,
    },
    { type: "특수문자 포함", value: 2, check: false },
    { type: "8자 이상", value: 3, check: false },
  ];
  return (
    <div>
      <ValidationInput axiosValue={"password"} current={"비밀번호"} />
      <PassCheckWrap>
        {PassCheckType.map((item: any, index: number) => {
          const type = item.type;
          return (
            <li key={index}>
              <input type="radio" id={item.value} checked={item.check} />
              <label
                className={item.check ? "active" : ""}
                htmlFor={item.value}
              >
                {type}
              </label>
            </li>
          );
        })}
      </PassCheckWrap>
    </div>
  );
};

export default PasswordInput;
