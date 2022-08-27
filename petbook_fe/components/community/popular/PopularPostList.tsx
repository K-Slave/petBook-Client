import PopularPostItem from "./PopularPostItem";
import styled from "styled-components";

const dummy = new Array(10).fill(1).map((_, index) => ({
  rank: index + 1,
  title: "제목이 들어갑니다",
}));

const PopularPostList = () => {
  return (
    <Wrapper>
      <List>
        {dummy.slice(0, 5).map((item) => (
          <PopularPostItem {...item} key={item.rank} />
        ))}
      </List>
      <List>
        {dummy.slice(5, 10).map((item) => (
          <PopularPostItem {...item} key={item.rank} />
        ))}
      </List>
    </Wrapper>
  );
};

export default PopularPostList;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
