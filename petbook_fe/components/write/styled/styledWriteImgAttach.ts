import styled from "styled-components";

const WriteImgAttachSection = styled.section`
  display: flex;
  gap: 13px;

  width: 100%;

  margin-top: 50px;

  font-weight: bold;

  .Img__Section__Icon {
    width: 77px;
    height: 77px;

    background-color: #fff;
  }
`;

const InfoBoxDiv = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const TitleP = styled.span`
  overflow: hidden;
  white-space: nowrap;

  line-height: 19px;

  color: #000000;
`;

const CountP = styled.p`
  line-height: 30px;
  color: rgba(0, 0, 0, 0.6);

  .Img__Selected__Length {
    color: #ff512b;
  }
`;

const ImgListUl = styled.ul`
  display: flex;
  gap: 12px;
`;

const ImgItemLi = styled.li`
  width: 77px;
  height: 77px;

  border-radius: 8px;

  img {
    border-radius: 8px;
  }
`;

const AddButtonBox = styled.button``;

export {
  WriteImgAttachSection,
  InfoBoxDiv,
  TitleP,
  CountP,
  ImgListUl,
  ImgItemLi,
  AddButtonBox,
};
