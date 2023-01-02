import Link from "next/link";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import getRandomKey from "@lib/utils/getRandomKey";
import DOMPurify from "isomorphic-dompurify";
import React from "react";
import { HeartBlankIcon } from "@components/common/icon/HeartIcon";
import { BookmarkBlankIcon } from "@components/common/icon/BookmarkIcon";
import CommonInfo from "@components/community/CommonInfo";
import usePagination from "./usePagination";
import useArticleList from "./useArticleList";
import {
  ArticleListDiv,
  ItemArticle,
  PageButton,
  PageButtonBoxDiv,
} from "./styled";

const ArticleList = () => {
  const { status, articles, totalPages } = useArticleList();
  // loading 상태일 때의 UI 추가 예정
  return (
    <ArticleListDiv>
      {articles.map((article) => (
        <ArticleList.Item article={article} key={article.id} />
      ))}
      <ArticleList.PageButtonBox totalPages={totalPages} />
    </ArticleListDiv>
  );
};

// ----------------------------------------------------------------------

const Item = ({ article }: { article: ArticleResponse }) => {
  const { id, title, content, user, tags, stat, createdAt } = article;
  return (
    <Link href={`/community/list/${id}`} passHref>
      <ItemArticle>
        <h3>{title}</h3>
        <div
          className="Item_Content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
        <div className="Item_Row">
          <div className="Item_Stats">
            <div>
              <HeartBlankIcon />
              <span>{stat.likeCount}</span>
            </div>
            <div>
              <BookmarkBlankIcon />
              <span>0</span>
            </div>
          </div>
          <CommonInfo
            username={user.nickname}
            date={createdAt}
            year={1}
            className="reverse-row"
          />
        </div>
      </ItemArticle>
    </Link>
  );
};

// -----------------------------------------------------------------

const PageButtonBox = ({ totalPages }: { totalPages: number }) => {
  const btnNum = 2;
  const { currentPage, changeCurrentPage, offset } = usePagination({
    totalPages,
    btnNum,
    basePath: "/community/list",
  });
  const onClickPrevButton = () => {
    changeCurrentPage(offset - btnNum);
  };
  const onClickNextButton = () => {
    changeCurrentPage(offset + btnNum);
  };
  const onClickPageButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { textContent } = e.currentTarget;
    changeCurrentPage(Number(textContent));
  };
  return (
    <PageButtonBoxDiv>
      {offset !== 1 && (
        <button onClick={onClickPrevButton} type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      {Array(totalPages + 1)
        .fill(1)
        .slice(offset, btnNum + offset)
        .map((_, i) => (
          <PageButton
            type="button"
            key={getRandomKey()}
            onClick={onClickPageButton}
            selected={currentPage === offset + i}
          >
            {i + offset}
          </PageButton>
        ))}
      {btnNum + offset <= totalPages && (
        <button onClick={onClickNextButton} type="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </PageButtonBoxDiv>
  );
};

ArticleList.Item = Item;
ArticleList.PageButtonBox = PageButtonBox;

export default ArticleList;
