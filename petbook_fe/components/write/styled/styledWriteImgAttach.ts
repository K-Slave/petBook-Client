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

    /* background-color: #fff; */
  }
`;

const InfoBoxDiv = styled.div`
  font-weight: 700;
  font-size: 1rem;
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
  position: relative;

  width: 77px;
  height: 77px;

  border-radius: 8px;

  img {
    border-radius: 8px;
  }

  .Cancle__Button {
    position: absolute;
    top: -6px;
    right: -6px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 19px;
    height: 19px;

    border-radius: 100%;
    background-color: #d9d9d9;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(190, 190, 190);
    }

    svg {
      width: 18.5px;
      height: 18.5px;
    }
  }
`;

const AddButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  transition: all 0.5s ease-in-out;

  svg {
    background: transparent;
    background-color: transparent;
  }

  &:hover {
    transition-delay: 0.5s;
    background-color: #cccccc;

    svg {
      animation: rotate 1s 0.5s ease 1;
    }
  }
`;

export {
  WriteImgAttachSection,
  InfoBoxDiv,
  TitleP,
  CountP,
  ImgListUl,
  ImgItemLi,
  AddButtonBox,
};
