import Link from "next/link";
import useArticleList from "@lib/hooks/article/useArticleList";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import usePagination from "@lib/hooks/article/usePagination";
import getRandomKey from "@lib/utils/getRandomKey";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  ArticleListDiv,
  ItemImg,
  ItemDiv,
  ItemAvatar,
  ItemArticle,
  PageButton,
  PageButtonBoxDiv
} from "./styled/styledArticleList";
import TagList from "../../TagList";

const ArticleList = () => {
  const { status, articles, totalPages } = useArticleList();
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
  const previewImage = "";
  return (
    <Link href={`/community/${id}`} passHref>
      <ItemArticle>
        <div className="Item_Column">
          <div className="Item_UserInfo">
            <ItemAvatar />
            <p className="Item_Nickname">{user.nickname}</p>
            <p className="Item_Date">{createdAt.split("T")[0]}</p>
          </div>
          <ItemDiv>
            <h3>{title}</h3>
            <p className="Item_Content">{content}</p>
            <TagList tags={tags} width={65} height={26} fontSize={14} />
            <p className="Item_Stats">
              <span>공감수 {stat.likeCount}</span>
              <span>/</span>
              <span>클릭수 {stat.viewCount}</span>
            </p>
          </ItemDiv>
        </div>
        {previewImage === "" ? null : <ItemImg />}
      </ItemArticle>
    </Link>
  );
};

// -----------------------------------------------------------------

const PageButtonBox = ({ totalPages } : { totalPages: number }) => {
  const btnNum = 2;
  const { currentPage, changeCurrentPage, offset } = usePagination({ totalPages, btnNum });
  const onClickPrevButton = () => {
    changeCurrentPage(offset - btnNum);
  };
  const onClickNextButton = () => {
    changeCurrentPage(offset + btnNum);
  };
  const onClickPageButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { textContent } = e.currentTarget;
    changeCurrentPage(Number(textContent));
  };
  return (
    <PageButtonBoxDiv>
      {offset !== 1 && (
        <button onClick={onClickPrevButton} type="button">
          <FiChevronLeft />
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
            { i + offset }
          </PageButton>
        ))}
      {btnNum + offset <= totalPages && (
        <button onClick={onClickNextButton} type="button">
          <FiChevronRight />
        </button>
      )}
    </PageButtonBoxDiv>
  );
};

ArticleList.Item = Item;
ArticleList.PageButtonBox = PageButtonBox;

export default ArticleList;
