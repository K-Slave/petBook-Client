import ArticleList from "@components/community/ArticleList";
import useArticleList from "@components/community/ArticleList/useArticleList";
import CategoryNav from "@components/community/CategoryNav";
import SearchBar from "@/stories/common/Input/SearchBar";

const ArticleListContainer = () => {
  const { status, articles, totalPages, params } = useArticleList();
  const { searchText, categoryName } = params;
  return (
    <>
      <div className="heading">
        <h1>
          {searchText ? (
            <>
              <span>&ldquo;{searchText}&rdquo;에 대한 검색결과</span>
              <span>총 {status === "loading" ? "" : articles.length}개</span>
            </>
          ) : (
            categoryName
          )}
        </h1>
        <SearchBar
          placeholder="관심있는 내용을 검색해보세요!"
          target="community"
        />
      </div>
      {!searchText && <CategoryNav />}
      <ArticleList
        status={status}
        articles={articles}
        totalPages={totalPages}
        emptyText={searchText ? "검색결과가 없어요!" : "아직 게시물이 없어요!"}
      />
    </>
  );
};

export default ArticleListContainer;
