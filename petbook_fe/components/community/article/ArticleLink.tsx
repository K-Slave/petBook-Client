import { ArticleItem } from "@lib/API/petBookAPI/types/articleRequest";
import Link from "next/link";
import styled from "styled-components";
import TagList from "../TagList";

const Article = styled.article`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: #ffffff;
  cursor: pointer;
  .ArticleLink_column {
    padding: 32px 35px 28px 37px;
  }
  .ArticleLink_userInfo {
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 6px;
    font-weight: 500;
    .ArticleLink_nickname {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
    .ArticleLink_date {
      margin-top: 1px;
      font-size: 12px;
      color: #777777;
    }
  }
`;

const ArticleLinkAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
`;

const ArticleLinkImg = styled.img`
  flex-shrink: 0;
  width: 385px;
  height: 207px;
  background-color: #fff6e6;
`;

const ArticleLinkDiv = styled.div`
  padding-left: 37px;
  h3 {
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 20px;
  }
  .ArticleLink_content {
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
  .ArticleLink_stats {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 34px;
    font-weight: 500;
    font-size: 12px;
    color: #777777;
  }
`;

interface Props {
  post: ArticleItem;
}

const ArticleLink = ({ post }: Props) => {
  const { id, title, content, user, tags, stat } = post;
  const previewImage = "";
  const date = "2022-02-03";
  return (
    <Link href={`/community/${id}`} passHref>
      <Article>
        <div className="ArticleLink_column">
          <div className="ArticleLink_userInfo">
            <ArticleLinkAvatar />
            <p className="ArticleLink_nickname">{user.nickname}</p>
            <p className="ArticleLink_date">{date}</p>
          </div>
          <ArticleLinkDiv>
            <h3>{title}</h3>
            <p className="ArticleLink_content">{content}</p>
            <TagList tags={tags} width={65} height={26} fontSize={14} />
            <p className="ArticleLink_stats">
              <span>공감수 {stat.likeCount}</span>
              <span>/</span>
              <span>클릭수 {stat.viewCount}</span>
            </p>
          </ArticleLinkDiv>
        </div>
        {previewImage === "" ? null : <ArticleLinkImg />}
      </Article>
    </Link>
  );
};

export default ArticleLink;
