import { BookmarkBlankSharpIcon } from "@components/common/icon/Bookmark";
import ChevronLeft from "@components/common/icon/ChevronLeft";
import { useRouter } from "next/router";
import PossibleAnimalList from "@components/common/hospital/PossibleAnimalList";
import HospitalBasicInfo from "@components/common/hospital/HospitalBasicInfo";
import Stats from "@components/common/hospital/Stats";
import Skeleton from "@components/common/Skeleton/Skeleton";
import HospitalReview from "@components/hospital/HospitalReview";
import HospitalDetailReview from "@components/hospital/HospitalDetailReview";
import PencilEditIcon from "@components/common/icon/PencilEdit";
import ShareForwardIcon from "@components/common/icon/ShareFoward";
import useModal from "@lib/hooks/common/useModal";
import { Section, LineDiv, ButtonBoxDiv, Divider } from "./styled";
import { HOSPITAL_DETAIL } from "@lib/queries/hospital";
import { useResource } from "@lib/hooks/common/useResource";
import Link from "next/link";

const HospitalDetail = ({ id }: { id: number }) => {
  const payload = {
    pathParam: String(id),
  };
  const { data } = useResource({
    key: HOSPITAL_DETAIL.createKey(payload),
    fetcher: () => HOSPITAL_DETAIL.fetcher(payload),
  });
  const router = useRouter();
  const goBack = () => {
    if (window.history.length <= 2) {
      router.push("/hospitalmap");
    } else {
      router.back();
    }
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
            <Link href={`/hospital/${data.data.id}`} passHref>
              <h1>{data.data.name}</h1>
            </Link>
            <Stats />
          </div>
        </header>
        <img
          alt="hospital thumbnail"
          width="330"
          height="180"
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdkFgdv%2FbtrA5bltSLO%2FjcrSxiECGbBln8xpuWx3F1%2Fimg.jpg"
        />
        <HospitalDetail.ButtonBox
          id={Number(router.query.id)}
          name={data.data.name}
        />
      </div>
      <LineDiv />
      <div className="wrapper">
        <HospitalBasicInfo address={data.data.address} />
        <PossibleAnimalList />
      </div>
      <LineDiv />
      {/* 리뷰 */}
      <HospitalDetailReview />
    </Section>
  );
};

export const ButtonBox = ({
  id,
  name,
  divider,
}: {
  id: number;
  name?: string;
  divider?: boolean;
}) => {
  const { openModal, closeModal } = useModal();
  const openReviewModal = (hospitalId: number, hospitalName?: string) => {
    openModal(HospitalReview, {
      closeModal,
      hospitalId,
      hospitalName,
    });
  };
  return (
    <ButtonBoxDiv>
      <div>
        <button type="button">
          <BookmarkBlankSharpIcon />
          <span>책갈피</span>
        </button>
      </div>
      {divider && <Divider />}
      <div>
        <button type="button">
          <ShareForwardIcon />
          <span>공유</span>
        </button>
      </div>
      {divider && <Divider />}
      <div>
        <button type="button" onClick={() => openReviewModal(id, name)}>
          <PencilEditIcon />
          <span>리뷰작성</span>
        </button>
      </div>
    </ButtonBoxDiv>
  );
};
ButtonBox.defaultProps = {
  divider: false,
};
HospitalDetail.ButtonBox = ButtonBox;

export default HospitalDetail;
