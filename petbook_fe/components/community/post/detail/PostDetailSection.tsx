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

interface PostDetailSectionProps {
  avatar: string;
  username: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  images: string[];
}

const PostDetailSection = ({
  avatar,
  username,
  date,
  title,
  content,
  tags,
  images,
}: PostDetailSectionProps) => {
  return (
    <Section>
      <Row>
        <DetailCommonInfo avatar={avatar} username={username} date={date} />
        <ButtonBox>
          <button type="button">공유</button>
          <button type="button">신고</button>
        </ButtonBox>
      </Row>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ImageSlider images={images} />
      <TagList tags={tags} width={90} height={32} fontSize={16} />
      <Bottom>
        <span>관람 수</span>
        <button type="button">좋아요 버튼</button>
        <button type="button">스크랩</button>
      </Bottom>
    </Section>
  );
};

export default PostDetailSection;
