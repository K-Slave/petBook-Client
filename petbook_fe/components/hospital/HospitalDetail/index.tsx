import { BookmarkBlankSharpIcon } from "@components/common/icon/Bookmark";
import ChevronLeft from "@components/common/icon/ChevronLeft";
import navigator from "@lib/modules/navigator";
import { removeQuery } from "@lib/modules/queryString";
import { useRouter } from "next/router";
import PossibleAnimalList from "@components/common/hospital/PossibleAnimalList";
import HospitalBasicInfo from "@components/common/hospital/HospitalBasicInfo";
import Stats from "@components/common/hospital/Stats";
import useResource from "@lib/hooks/common/useResource";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import Skeleton from "@components/common/Skeleton/Skeleton";
import { Section, LineDiv, Box } from "./styled";

const HospitalDetail = ({ id }: { id: number }) => {
  const { data } = useResource({
    key: [HOSPITAL_LIST.key[0], { id }],
    fetcher: () =>
      HOSPITAL_LIST.fetcher({
        params: {
          id,
          page: 0,
          size: 1,
        },
      }),
  });
  const router = useRouter();

  const goBack = () => {
    const url = removeQuery({ router, key: "id" });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };

  console.log(data);

  if (!data) {
    return (
      <Section>
        <div className="wrapper">
          <Skeleton width="100%" height="100%" />
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="wrapper">
        <header>
          <button type="button" onClick={goBack}>
            <ChevronLeft />
          </button>
          <div>
            <h1>{data?.data.hospitals[0].name}</h1>
            <Stats />
          </div>
        </header>
        <img
          alt="hospital thumbnail"
          width="330"
          height="180"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdkFgdv%2FbtrA5bltSLO%2FjcrSxiECGbBln8xpuWx3F1%2Fimg.jpg"
        />
        <HospitalDetail.ButtonBox />
      </div>
      <HospitalDetail.Divider />
      <div className="wrapper">
        <HospitalBasicInfo
          phoneNumber="02-333-4921"
          address={data?.data.hospitals[0].address}
        />
        <PossibleAnimalList />
      </div>
      <HospitalDetail.Divider />
      {/* 리뷰 */}
    </Section>
  );
};

const ButtonBox = () => {
  return (
    <Box>
      <div>
        <button type="button">
          <BookmarkBlankSharpIcon />
          <span>책갈피</span>
        </button>
      </div>
      <div>
        <button type="button">
          <BookmarkBlankSharpIcon />
          <span>공유</span>
        </button>
      </div>
      <div>
        <button type="button">
          <BookmarkBlankSharpIcon />
          <span>리뷰작성</span>
        </button>
      </div>
    </Box>
  );
};

const Divider = () => {
  return <LineDiv />;
};

HospitalDetail.Divider = Divider;
HospitalDetail.ButtonBox = ButtonBox;

export default HospitalDetail;
