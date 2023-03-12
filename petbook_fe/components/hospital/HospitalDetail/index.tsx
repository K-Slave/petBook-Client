import { BookmarkBlankSharpIcon } from "@components/common/icon/Bookmark";
import ChevronLeft from "@components/common/icon/ChevronLeft";
import { useRouter } from "next/router";
import PossibleAnimalList from "@components/common/hospital/PossibleAnimalList";
import HospitalBasicInfo from "@components/common/hospital/HospitalBasicInfo";
import Stats from "@components/common/hospital/Stats";
import useResource from "@lib/hooks/common/useResource";
import { HOSPITAL_LIST } from "@pages/hospitalmap";
import Skeleton from "@components/common/Skeleton/Skeleton";
import HospitalReview from "@components/hospital/HospitalReview";
import HospitalDetailReview from "@components/hospital/HospitalDetailReview";
import PencilEditIcon from "@components/common/icon/PencilEdit";
import ShareForwardIcon from "@components/common/icon/ShareFoward";
import useModal from "@lib/hooks/common/useModal";
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
    router.back();
  };
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
            <h1>{data?.data.hospitals[0].hospitals.name}</h1>
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
      <LineDiv />
      <div className="wrapper">
        <HospitalBasicInfo
          address={data?.data.hospitals[0].hospitals.address}
        />
        <PossibleAnimalList />
      </div>
      <LineDiv />
      {/* 리뷰 */}
      <HospitalDetailReview />
    </Section>
  );
};

const ButtonBox = () => {
  const { openModal, closeModal } = useModal();
  const openReviewModal = () => {
    openModal(HospitalReview, {
      closeModal,
    });
  };
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
          <ShareForwardIcon />
          <span>공유</span>
        </button>
      </div>
      <div>
        <button type="button" onClick={openReviewModal}>
          <PencilEditIcon />
          <span>리뷰작성</span>
        </button>
      </div>
    </Box>
  );
};

HospitalDetail.ButtonBox = ButtonBox;

export default HospitalDetail;
