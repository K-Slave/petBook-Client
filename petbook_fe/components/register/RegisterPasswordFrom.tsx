import ValidationInput from "@components/common/ValidationInput";
import { PassCheckWrap } from "./styled/styledRegisterForm";

// TODO : any 사용으로 인한 ESLint 에러제거
const PasswordInput = () => {
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
      <ValidationInput
        submitType="register"
        axiosValue="password"
        current="비밀번호"
      />
      <PassCheckWrap>
        {PassCheckType.map((item, index: number) => {
          const { type } = item;
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
