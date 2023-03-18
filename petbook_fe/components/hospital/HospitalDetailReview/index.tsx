import { usePage } from "@components/common/Pagination/usePagination";
import { hospitalRequest } from "@lib/API/petBookAPI";
import useUserId from "@lib/hooks/article/useUserId";
import useModal from "@lib/hooks/common/useModal";
import useResource, { createResource } from "@lib/hooks/common/useResource";
import { HOSPITAL_REVIEW_LIST } from "@pages/hospitalmap";
import { useRouter } from "next/router";
import React, { useState } from "react";
import HospitalReview from "../HospitalReview";
import {
  ReviewBox,
  ReviewBoxContent,
  ReviewBoxHeader,
  ReviewBoxImgSlide,
  ReviewContainer,
  ReviewContainerHeader,
  ReviewBoxMoreWrap,
  ReviewBtn,
} from "./styled";

const HospitalDetailReview = () => {
  const router = useRouter();
  const userId = useUserId();

  const id = Number(router.query.id);
  const page = usePage() - 1;
  const { data } = useResource({
    key: [HOSPITAL_REVIEW_LIST.key[0], { id }],
    fetcher: () =>
      HOSPITAL_REVIEW_LIST.fetcher({
        params: {
          hospitalId: Number(id),
          page,
          size: 20,
        },
      }),
  });

  return (
    <ReviewContainer>
      <ReviewContainerHeader>
        <h3>
          리뷰 <span>{data?.data.totalElements}</span>
        </h3>
      </ReviewContainerHeader>
      {data?.data.reviews.map((item) => {
        return (
          <ReviewBox key={item.id}>
            <ReviewBoxHeader>
              <div className="Profile">프로필</div>
              <div className="Info">
                <p className={`State ${item.experience}`}>
                  {item.experience === "BAD" ? "나빳어요" : "좋았어요"}
                </p>
                <p>
                  {item.user.nickname} <span>2022.01.01</span>
                </p>
              </div>
              <HospitalDetailReview.SettingBtn id={Number(router.query.id)} />
            </ReviewBoxHeader>
            <ReviewBoxImgSlide state={item.images}>
              {item.images?.map((img) => {
                return <div>{(img.imageUrl, img.id)}</div>;
              })}
            </ReviewBoxImgSlide>
            <ReviewBoxContent>{item.content}</ReviewBoxContent>
          </ReviewBox>
        );
      })}
    </ReviewContainer>
  );
};

const SettingBtn = ({ id }: { id: number }) => {
  const [btnState, setBtnState] = useState(false);
  const onClick = () => {
    setBtnState(!btnState);
  };
  const { openModal, closeModal } = useModal();
  const openReviewModal = (hospitalId: number) => {
    openModal(HospitalReview, {
      closeModal,
      hospitalId,
    });
  };
  const removeReview = () => {
    alert("삭제 하는중");
  };
  const reportReview = () => {
    alert("신고 하는중");
  };

  return (
    <ReviewBoxMoreWrap btnState={btnState}>
      <ReviewBtn onClick={onClick}>
        <div className="More" />
      </ReviewBtn>
      {/* {btnState && ( */}
      <article>
        <ul>
          <li onClick={() => openReviewModal(id)}>수정</li>
          <li onClick={removeReview}>삭제</li>
          <li onClick={reportReview}>신고</li>
        </ul>
      </article>
      {/* )} */}
    </ReviewBoxMoreWrap>
  );
};
HospitalDetailReview.SettingBtn = SettingBtn;

export default HospitalDetailReview;
