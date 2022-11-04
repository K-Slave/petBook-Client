import styled from "styled-components";

const ArticleSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  padding: 48px 40px 32px;
  border: 1px solid #f5edde;
  border-radius: 16px;
  background-color: #fff;
  .ArticleSection_Top_Row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ArticleSection_Button_Box {
    display: flex;
    align-items: center;
    gap: 28px;
    & > button {
      font-weight: 500;
      font-size: 14px;
      color: #7c7c7c;
    }
  }
  .ArticleSection_Bottom_Row {
    display: flex;
    align-items: center;
    margin-top: 27px;
    gap: 28px;
    & > button,
    & > span {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #7c7c7c;
    }
  }

  h2 {
    margin: 59px 0 26px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #444444;
  }
  p {
    font-weight: 500;
    font-size: 17px;
    line-height: 31px;
    color: #747474;
  }
`;

const ImageSliderDiv = styled.div`
  display: flex;
  gap: 17px;
  margin: 32px 0;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImageSliderImg = styled.img`
  flex-shrink: 0;
  max-width: 354px;
  max-height: 354px;
  border-radius: 16px;
  background-color: #d9d9d9;
  object-fit: cover;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 80px;
`;

export { ArticleSectionBox, ImageSliderDiv, ImageSliderImg, Spacer };
