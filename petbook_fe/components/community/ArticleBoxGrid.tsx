import useCategories from "@lib/hooks/article/useCategories";
import useResource from "@lib/hooks/common/useResource";
import { ARTICLE_LIST } from "@pages/community";
import Link from "next/link";
import styled from "styled-components";
import { CategoryItem } from "@lib/API/petBookAPI/types/categoryRequestSpr";

const ArticleBoxGrid = () => {
    const { categories } = useCategories({ all: true });
    return (
        <ArticleBoxGridDiv>
            {categories.map((category) =>
                <ArticleBoxGrid.Box category={category} key={category.id} />
            )}
        </ArticleBoxGridDiv>
    );
};

const ArticleBoxGridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
`;

const Box = ({ category } : { category: CategoryItem }) => {
    const { data } = useResource(ARTICLE_LIST({ category, page: 0, size: 5 }));
    return (
        <BoxArticle>
            <div>
                <h3>{category.name}</h3>
                <Link href="/community" passHref><button type="button">더보기</button></Link>
            </div>
            <BoxUL>
                {data?.data.articles.map((article) =>
                    <li key={article.id}>
                        <Link href={`/community/${article.id}`} passHref>
                            <span className="Box_title">
                                {article.title}
                            </span>
                        </Link>
                        <span className="Box_scrap">
                            <span className="Box_scrap_img" />
                            <span>0</span>
                        </span>
                    </li>)}
            </BoxUL>
        </BoxArticle>
    );
};

const BoxArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 36px;
    background-color: white;
    border-radius: 16px;
    h3 {
        font-weight: bold;
        font-size: 22px;
    }
    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
const BoxUL = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 16px;
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    .Box_title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;    
    }
    .Box_scrap {
        display: flex;
        align-items: center;
        color: var(--black_03);
        flex-shrink: 0;
    }
    .Box_scrap_img {
        background: url('/img/common/scrap.svg') no-repeat;
        width: 24px;
        height: 24px;
    }
`;

ArticleBoxGrid.Box = Box;

export default ArticleBoxGrid;
