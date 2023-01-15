import styled from "styled-components";

const WriteImgAttachSection = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;

  margin: 32px 0;
  padding: 26px 24px 25px;

  border-radius: 8px;
  background-color: #fff;

  font-weight: bold;

  .Img__Section__Icon {
    width: 77px;
    height: 77px;

    /* background-color: #fff; */
  }
`;

const IllustImg = styled.img`
  width: 52px;
  height: 52px;
  background-color: #eeede7;
`;

const InfoBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-weight: 700;
  font-size: 1rem;
`;

const TitleP = styled.span`
  overflow: hidden;
  white-space: nowrap;

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: #92928e;
`;

const CountP = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;
  letter-spacing: -0.02em;
  color: #c5c4bd;
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
  height: 32px;

  padding: 4px 16px;

  border-radius: 40px;
  background-color: var(--secondary);

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  color: var(--primary);

  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export {
  WriteImgAttachSection,
  IllustImg,
  InfoBoxDiv,
  TitleP,
  CountP,
  ImgListUl,
  ImgItemLi,
  AddButtonBox,
};
