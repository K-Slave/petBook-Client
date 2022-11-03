import { BsPlus } from "react-icons/bs";
import styled from "styled-components";

const WriteImgSubmitSection = styled.section`
  display: flex;
  gap: 13px;
  /* flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; */

  width: 100%;

  margin-top: 50px;

  font-weight: bold;

  .Img__Section__Icon {
    width: 77px;
    height: 77px;

    background-color: #fff;
  }
`;

const WriteImgSubmit = () => {
  return (
    <WriteImgSubmitSection>
      <label className="Img__Section__Title">이미지 첨부</label>
      <button>
        <BsPlus className="Img__Section__Icon" />
      </button>
    </WriteImgSubmitSection>
  );
};

export default WriteImgSubmit;
