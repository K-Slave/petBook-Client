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
        current="비밀번호를 입력해주세요"
      />
      <RegisterInputBox
        IconType="Password_Check_Disabled"
        axiosValue="password"
        current="비밀번호를 입력해주세요"
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
