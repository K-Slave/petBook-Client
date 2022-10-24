import { useSetRecoilState } from "recoil";
import { userState } from "atoms/pageAtoms/login/userState";
interface ValidationProps {
  current: String;
  axiosValue: String;
}

const ValidationInput = ({ current, axiosValue }: ValidationProps) => {
  console.log("d");
  const setUserState = useSetRecoilState(userState);

  const onChange = (e: object) => {
    if (axiosValue) {
      setUserState((user) => ({
        ...user,
        [`${axiosValue}`]: e.target.value,
      }));
    }
  };

  return (
    <div>
      <div className="box">
        <label htmlFor={`${current}`}>{current}</label>
        <input
          type={`${axiosValue}`}
          id={`${current}`}
          placeholder={`${current}를 입력해주세요 `}
          onChange={onChange}
        />
      </div>
      {current !== "비밀번호" ? (
        <div className="err_box">* 오류 메세지가 나옵니다</div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ValidationInput;
