import styled from "styled-components";

const ArticleListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Article = styled.article`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #ffffff;
  cursor: pointer;
  .ArticleItem_column {
    padding: 32px 35px 28px 37px;
  }
  .ArticleItem_userInfo {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 6px;
    font-weight: 500;
    .ArticleItem_nickname {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
    .ArticleItem_date {
      margin-top: 1px;
      font-size: 12px;
      color: #777777;
    }
  }
`;

const ArticleItemAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
`;

const ArticleItemImg = styled.img`
  flex-shrink: 0;
  width: 385px;
  height: 207px;
  background-color: #fff6e6;
`;

const ArticleItemDiv = styled.div`
  padding-left: 37px;
  h3 {
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 20px;
  }
  .ArticleItem_content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #747474;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ArticleItem_stats {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 34px;
    font-weight: 500;
    font-size: 12px;
    color: #777777;
  }
`;

export {
  ArticleListDiv,
  ArticleItemAvatar,
  ArticleItemDiv,
  ArticleItemImg,
  Article,
};
