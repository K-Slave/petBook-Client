import styled from "styled-components";
import DetailCommonInfo from "../../DetailCommonInfo";
import TagList from "../../TagList";
import ImageSlider from "./ImageSlider";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #f5edde;
  border-radius: 16px;
  padding: 48px 40px 32px;
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
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #444444;
  margin: 59px 0 26px;
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

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const dummyImage1 =
  "https://images.unsplash.com/photo-1607599193024-de4a7601aefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const dummyImage2 =
  "https://images.unsplash.com/photo-1629898569904-669319348211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
const dummyImage3 =
  "https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const PostDetailSection = () => {
  const dummy = {
    id: 1,
    title: "제목제목1",
    content: "본문본문 1",
    user: {
      id: 1,
      nickname: "테스터",
    },
    category: {
      id: 1,
      name: "질문과 답변",
    },
    tags: [],
    stat: {
      viewCount: 7,
      likeCount: 0,
    },
  };
  const { id, title, content, user, category, tags, stat } = dummy;
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
      <ImageSlider images={[avatar, dummyImage1, dummyImage2, dummyImage3]} />
      <TagList tags={tags} width={90} height={32} fontSize={16} />
      <Bottom>
        <span>관람 수 ${stat.viewCount}</span>
        <button type="button">좋아요 버튼</button>
        <button type="button">스크랩</button>
      </Bottom>
    </Section>
  );
};

export default PostDetailSection;
