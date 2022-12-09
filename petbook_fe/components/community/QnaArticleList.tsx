import useResource from "@lib/hooks/common/useResource";
import { ARTICLE_LIST } from "@pages/community";
import styled from "styled-components";

const QnaArticleList = () => {
    const { data } = useResource(ARTICLE_LIST({ category: { id: 1, name: "질문과 답변" }, page: 0, size: 4 }));
    return (
        <ListBox>
            {data?.data.articles.slice(0, 4).map((article) =>
                <Article key={article.id}>
                    <h4>{article.title}</h4>
                    <div>
                        <div className="Article_user">
                            <span className="Article_username">{article.user.nickname}</span>
                            <span className="Article_year">1년차</span>
                        </div>
                        <span className="Article_date">1일전</span>
                    </div>
                </Article>
            )}
        </ListBox>

    );
};

const ListBox = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 24px;
`;

const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 220px;
    padding: 32px;
    background-color: var(--bg_01);
    border-radius: 16px;
    h4 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 22px;
        
    }
    .Article_user {
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;
    }
    .Article_username {

        font-size: 14px;
        color: var(--black_02);
    }
    .Article_date {
        display: block;
        margin-top: 10px;
        font-size: 14px;
        color: var(--black_05);
    }
    .Article_year {
        padding: 3px 10px;
        background-color: var(--black_07);
        border-radius: 100px;
        color: var(--black_02);
        font-size: 10px;
        font-weight: 500;
    }
`;

export default QnaArticleList;
