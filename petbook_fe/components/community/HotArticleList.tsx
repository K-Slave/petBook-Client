/* eslint-disable react/jsx-props-no-spreading */
import Image from "next/image";
import styled from "styled-components";
import { BookmarkBlankIcon } from "./BookmarkIcon";
import { HeartBlankIcon } from "./HeartIcon";

const dummy = new Array(5).fill(1).map((_, index) => ({
  id: index + 1,
  title:
    "제목이 들어갑니다 제목이 들어갑니다제목이 들어갑니다제목이 들어갑니다 제목이 들어갑니다 제목이 들어갑니다제목이 들어갑니다제목이 들어갑니다",
}));

const HotArticleList = () => {
  return (
    <PopularPostListBox>
      {dummy.map((data) => (
        <li key={data.id}>
          <span className="PopularPostList_title">{data.title}</span>
          <span className="PopularPostList_stats">
            <span>
              <HeartBlankIcon />
              <span>000</span>
            </span>
            <span>
              <BookmarkBlankIcon />
              <span>000</span>
            </span>
          </span>
        </li>
      ))}
    </PopularPostListBox>
  );
};

const PopularPostListBox = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 36px;
  background-color: #fff;
  border-radius: 16px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }
  .PopularPostList_title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .PopularPostList_stats {
    flex-shrink: 0;
    display: flex;
    gap: 12px;
    color: var(--black_03);
    & > span {
      display: flex;
      align-items: center;
    }
  }
`;

export default HotArticleList;
