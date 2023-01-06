import RegisterInputBox from "@components/register/RegisterInputBox";
// import { PassCheckWrap } from "./styled/styledRegisterForm";

const PasswordInput = () => {
  // const PassCheckType = [
  //   {
  //     type: "영어 대문자 포함",
  //     value: "english",
  //     check: true,
  //   },
  //   { type: "특수문자 포함", value: "spacial", check: false },
  //   { type: "8자 이상", value: "limit", check: false },
  // ];
  return (
    <div>
      <RegisterInputBox
        IconType="Password"
        axiosValue="password"
        checkIconType="Password_Check_Disabled"
        current="비밀번호 : 영문 8자리 이상 대소문자 + 숫자 + 특수문자 "
        registerInfoText="비밀번호 확인"
      />
      {/* <PassCheckWrap>
        {PassCheckType.map((item) => {
          const { type } = item;
          return (
            <li key={item.value}>
              <input
                className="default"
                type="radio"
                id={item.value}
                checked={item.check}
              />
              <label
                className={item.check ? "active" : ""}
                htmlFor={item.value}
              >
                {type}
              </label>
            </li>
          );
        })}
      </PassCheckWrap> */}
    </div>
  );
};

export default PasswordInput;
