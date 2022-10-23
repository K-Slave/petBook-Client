import styled from "styled-components";

const Item = styled.li`
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  height: 60px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const Rank = styled.p<{ rank: number }>`
  width: 72px;
  padding-left: 20px;
  font-weight: 800;
  font-size: 22px;
  color: ${({ rank }) => (rank === 1 ? "#FF2E00" : "#000")};
`;

const Title = styled.h3<{ rank: number }>`
  font-size: 18px;
  font-weight: ${({ rank }) => (rank === 1 ? "700" : "normal")};
  color: ${({ rank }) => (rank === 1 ? "#000" : "#333333")};
  line-height: 22px;
  letter-spacing: -0.02em;
`;

const Info = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #ff2e00;
`;

interface Props {
  rank: number;
  title: string;
}

const PopularPostItem = ({ rank, title }: Props) => {
  return (
    <Item>
      <Rank rank={rank}>{rank}</Rank>
      <Row>
        <Title rank={rank}>{title}</Title>
        <Info>댓글 / 조회수</Info>
      </Row>
    </Item>
  );
};

export default PopularPostItem;
