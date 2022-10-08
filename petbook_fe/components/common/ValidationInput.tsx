import styled from "styled-components";

interface ValidationProps {
  current: String;
}

const Button = styled.button`
  position: absolute;
  background-color: var(--main);
  border-radius: 8px;
  width: 116px;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  opacity: 0.7;
  padding: 9px 12px;
  line-height: 23px;
  font-weight: 500;
  color: white;
`;

const ValidationInput = ({ current }: ValidationProps) => {
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
      <div className="err_box">* 오류 메세지가 나옵니다</div>
    </div>
  );
};
export default ValidationInput;
