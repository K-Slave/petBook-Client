import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styled from "styled-components";
import KnowHowSection from "../../components/common/PaperBox/Interface/KnowHowSection";
import About from "../../components/community/about/About";
import PopularPostSection from "../../components/community/popular/PopularPostSection";
import PostSection from "../../components/community/post/PostSection";
import VoteSection from "../../components/community/vote/VoteSection";
import WriteButton from "../../components/community/WriteButton";
import useResource, { createResource } from "../../hooks/useResource";
import localConsole from "../../lib/localConsole";
import fetchClient from "../api/fetch/fetchClient";
// import { FetchResponseToJS } from "../api/fetch/fetchCore";
import boardRequest from "../api/petBook_API/boardRequest";

export const board_list = createResource({
  key: "board_list",
  fetcher: () => {
    const params = {
      id: 0,
      category_id: 0,
      visible_status: "Y",
      currentPage: 1,
      numPerPage: 10,
    };

    return boardRequest.board_list(params);
  },
});

export const category_list = createResource({
  key: "category_list",
  fetcher: async () => {
    const params = {
      id: 0,
      visible_status: "Y",
      currentPage: 1,
      numPerPage: 10,
    };

    const response = await fetchClient.get("/category", params);

    const body = await response.json();

    return body;
  },
});

const Community: NextPage = ({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const board = useResource(board_list); // <- react-query 로 가져오는 API 데이터 (server-side-data store)
  const category = useResource(category_list);

  console.log(board, "board");
  console.log(category, "category");

  return (
    <>
      <Container>
        <About />
        <Sections>
          <VoteSection />
          <PopularPostSection />
          <PostSection />
          <KnowHowSection />
        </Sections>
        <WriteButton />
      </Container>
    </>
  );
};

const Container = styled.main`
  background-color: #fffbf4;
`;

const Sections = styled.div`
  width: 90vw;
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
`;

type PetbookPages = NextPage & {
  requiredResources?: {
    key: string;
    fetcher: () => Promise<any>;
  }[];
};

const Community_Index: PetbookPages = Community;
Community_Index.requiredResources = [board_list, category_list];

export default Community;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.page === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/community?page=1",
      },
      props: {
        page: 1,
      },
    };
  } else {
    return {
      props: {
        page: query.page,
      },
    };
  }
};
