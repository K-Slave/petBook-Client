import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import Link from "next/link";
import styled from "styled-components";
import TagList from "../TagList";

export interface ItemProps {
  post: ArticleResponse;
}

const ArticleItem = ({ post }: ItemProps) => {
  const { id, title, content, user, tags, stat } = post;
  const previewImage = "";
  const date = "2022-02-03";
  return (
    <Link href={`/community/${id}`} passHref>
      <Article>
        <div className="ArticleItem_column">
          <div className="ArticleItem_userInfo">
            <ArticleItemAvatar />
            <p className="ArticleItem_nickname">{user.nickname}</p>
            <p className="ArticleItem_date">{date}</p>
          </div>
          <ArticleItemDiv>
            <h3>{title}</h3>
            <p className="ArticleItem_content">{content}</p>
            <TagList tags={tags} width={65} height={26} fontSize={14} />
            <p className="ArticleItem_stats">
              <span>공감수 {stat.likeCount}</span>
              <span>/</span>
              <span>클릭수 {stat.viewCount}</span>
            </p>
          </ArticleItemDiv>
        </div>
        {previewImage === "" ? null : <ArticleItemImg />}
      </Article>
    </Link>
  );
};

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
export default ArticleItem;
