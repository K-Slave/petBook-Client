import { ARTICLE_ITEM } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import useResource from "@lib/hooks/useResource";
import styled from "styled-components";
import DetailCommonInfo from "../../DetailCommonInfo";
import TagList from "../../TagList";
import ImageSlider from "./ImageSlider";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 48px 40px 32px;
  border: 1px solid #f5edde;
  border-radius: 16px;
  background-color: #fff;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  & > button {
    font-weight: 500;
    font-size: 14px;
    color: #7c7c7c;
  }
`;

const Title = styled.h2`
  margin: 59px 0 26px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #444444;
`;

const Content = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 31px;
  color: #747474;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 27px;
  gap: 28px;
  & > button,
  & > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #7c7c7c;
  }
`;

const dummyImages = [
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1607599193024-de4a7601aefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1629898569904-669319348211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const ArticleSection = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const { data } = useResource({
    key: `${ARTICLE_ITEM.key}_${articleId}`,
    fetcher: () => ARTICLE_ITEM.fetcher(articleId),
  });
  if (data === undefined) {
    return <Section />;
  }

  const { id, title, content, user, category, tags, stat } = data.data;
  return (
    <Section>
      <Row>
        <DetailCommonInfo
          avatar=""
          username={user.nickname}
          date="2022-02-20"
        />
        <ButtonBox>
          <button type="button">공유</button>
          <button type="button">신고</button>
        </ButtonBox>
      </Row>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ImageSlider images={dummyImages} />
      <TagList tags={tags} width={90} height={32} fontSize={16} />
      <Bottom>
        <span>관람 수 {stat.viewCount}</span>
        <button type="button">좋아요 버튼</button>
        <button type="button">스크랩</button>
      </Bottom>
    </Section>
  );
};

export default ArticleSection;
