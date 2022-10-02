import styled from "styled-components";

const Position = styled.hgroup`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  h2 {
    font-size: 20px;
  }
  button {
    font-size: 14px;
    color: #858585;
  }
`;

const PositionInfo = () => {
  return (
    <>
      <Position>
        <h2>선택위치</h2>
        <button>위치 수정</button>
      </Position>
    </>
  );
};
export default PositionInfo;
