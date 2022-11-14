import Link from "next/link";
import useArticleList from "@lib/hooks/article/useArticleList";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import useButtonOffset from "@lib/hooks/article/useButtonOffset";
import usePagination from "@lib/hooks/article/usePagination";
import getRandomKey from "@lib/utils/getRandomKey";
import { useRef } from "react";
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
  const btnNum = useRef(10);
  const { currentPage, changeCurrentPage } = usePagination(totalPages);
  const offset = useButtonOffset({ btnNum: btnNum.current, currentPage });
  const onClickPrev = () => {
    changeCurrentPage(offset - btnNum.current);
  };
  const onClickNext = () => {
    changeCurrentPage(offset + btnNum.current);
  };
  return (
    <PageButtonBoxDiv>
      {offset !== 1 && (
        <button onClick={onClickPrev} type="button">
          <FiChevronLeft />
        </button>
      )}
      {Array(totalPages + 1)
        .fill(1)
        .slice(offset, btnNum.current + offset)
        .map((_, i) => (
          <PageButton
            key={getRandomKey()}
            onClick={() => changeCurrentPage(i + offset)}
            selected={currentPage === offset + i}
          >
            {i + offset}
          </PageButton>
        ))}
      {btnNum.current + offset < totalPages && (
        <button onClick={onClickNext} type="button">
          <FiChevronRight />
        </button>
      )}
    </PageButtonBoxDiv>
  );
};

ArticleList.Item = Item;
ArticleList.PageButtonBox = PageButtonBox;

export default ArticleList;
