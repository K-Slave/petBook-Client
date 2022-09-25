import { useRef } from "react";
import { useRouter } from "next/router";
import MainSection from "../MainSection";
import PaginationButton from "./PaginationButton";
import PostFilter from "./PostFilter";
import PostList from "./PostList";
import { useScroll } from "./useScroll";

const PostSection = () => {
  const router = useRouter();
  const currentPage = Number(router.query?.page);
  const ref = useRef<HTMLElement | null>(null);
  const limit = useRef(10);
  const numPages = Math.ceil(dummy.length / limit.current);
  const offset = (currentPage - 1) * limit.current;
  useScroll({ top: ref.current?.offsetTop }, [currentPage]);
  return (
    <MainSection
      title="Live talk"
      description="실시간 업로드되는 유저들의 이야기"
      sectionRef={ref}
    >
      <PostFilter />
      <PostList posts={dummy.slice(offset, offset + limit.current)} />
      <PaginationButton numPages={numPages} />
    </MainSection>
  );
};

export default PostSection;

const dummy = Array(260)
  .fill({
    avatar: "",
    username: "arin",
    date: "2022.08.24",
    title:
      "질문이 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다 들어갑니다",
    content: `내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다 내용이 들어갑니다`,
    tagList: ["태그", "태그", "태그"],
    likeCnt: 1,
    commentCnt: 1,
    viewCnt: 1,
    previewImage: "image",
  })
  .map((item, index) => ({ ...item, id: index }));
