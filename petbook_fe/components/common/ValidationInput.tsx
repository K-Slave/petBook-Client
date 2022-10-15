import { useSetRecoilState } from "recoil";
import userState from "atoms/componentAtoms/register/userState";
interface ValidationProps {
  current: String;
}

const ValidationInput = ({ current }: ValidationProps) => {
  const setUser = useSetRecoilState(userState);
  return (
    <div>
      <div className="box">
        <label htmlFor={`${current}`}>{current}</label>
        <input
          type="text"
          id={`${current}`}
          placeholder={`${current}를 입력해주세요 `}
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
