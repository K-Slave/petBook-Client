import useCategories from "@lib/hooks/article/useCategories";
import { useResource } from "@lib/hooks/common/useResource";
import Link from "next/link";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequest";
import { BoxGrid, ContentWrap, RecommendContent, TagWrap } from "./styled";
import { ARTICLE_LIST_PREVIEW } from "@lib/resources/articleResource";
import CommonInfo from "../CommonInfo";

const RecommendTags = [
  { id: 1, tagContent: "토끼 초보" },
  { id: 2, tagContent: "토끼 분양" },
  { id: 3, tagContent: "토끼기르는 법" },
];

const RecommendWriteList = () => {
  const { categories } = useCategories({ all: true });
  return (
    <>
      {RecommendTags.map((it) => {
        return (
          <TagWrap key={it.id}>
            <span className="tagText">{it.tagContent}</span>
          </TagWrap>
        );
      })}
      <BoxGrid>
        {categories.map((category) => (
          <RecommendBox category={category} key={category.id} />
        ))}
      </BoxGrid>
    </>
  );
};

const RecommendBox = ({ category }: { category: CategoryItem }) => {
  const payload = {
    params: {
      categoryId: category.id.toString(),
      page: 0,
      size: 5,
      popular: false,
    },
  };

  const { data } = useResource({
    resource: ARTICLE_LIST_PREVIEW[category.id],
    payload,
  });
  return (
    <>
      <ContentWrap>
        {data?.response.data.result.articles.length === 0 ? (
          // 임시, 추후에 수정예정
          <>
            <RecommendContent>
              <p className="Content_Wrap">
                여러분, 토끼 목욕 어떻게 시켜요? 전에 토끼 분양할 때 목욕은
                시키는...
              </p>
            </RecommendContent>
            <CommonInfo username={"내일은 피구왕"} year={2} date={"1"} />
          </>
        ) : (
          <div>
            {data?.response.data.result.articles.slice(0, 1).map((article) => (
              <Link key={article.id} href={"/community/list"} passHref>
                <RecommendContent>
                  <p className="Content_Wrap">
                    안녕하세요, 저는 드워프 토끼를 키우는 작가입니다만, 다른
                    토끼에 비해 왜...
                  </p>
                  <CommonInfo
                    username={article.user.nickname}
                    year={1}
                    date={article.createdAt}
                  />
                </RecommendContent>
              </Link>
            ))}
          </div>
        )}
      </ContentWrap>
    </>
  );
};

export default RecommendWriteList;
