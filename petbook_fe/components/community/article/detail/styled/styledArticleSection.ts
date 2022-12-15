import { menuListStyle } from "@components/common/DropdownMenu";
import styled from "styled-components";

const ArticleSectionBox = styled.section`
  display: flex;
  flex-direction: column;
  padding: 48px 40px 32px;
  border-radius: 16px;
  background-color: #fff;
  .ArticleSection_Top_Row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
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
  .ArticleSection_Content {
    margin: 32px 0;
    color: var(--black_01);
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }
  h2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
    color: var(--black_01);
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
  height: 32px;
`;

const MenuListBox = styled.div`
  ${menuListStyle};
`;

export { ArticleSectionBox, ImageSliderDiv, ImageSliderImg, Spacer, MenuListBox };
