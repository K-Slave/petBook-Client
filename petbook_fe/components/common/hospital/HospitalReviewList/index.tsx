import React from "react";
import { HospitalFullInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import {
  ReviewBox,
  ReveiwBoxHeader,
  ReveiwBoxBody,
  ReviewBoxButton,
} from "./styled";
import useModal from "@lib/hooks/common/useModal";
import HospitalReview from "@components/hospital/HospitalReview";

export const PointReviewList = (hospitals: HospitalFullInfo) => {
  const { openModal, closeModal } = useModal();
  const openReviewModal = (hospitalId: number) => {
    openModal(HospitalReview, {
      closeModal,
      hospitalId,
    });
  };
  return (
    <section>
      {hospitals.worstReview.worstId === 0 ? (
        <ReviewBox>
          <ReveiwBoxHeader className="GOOD">
            <div className="Happy_Color" />
            <p>베스트 리뷰가 없습니다.</p>
            <ReviewBoxButton
              onClick={() => openReviewModal(hospitals.hospitals.id)}
            >
              리뷰쓰기
            </ReviewBoxButton>
          </ReveiwBoxHeader>
        </ReviewBox>
      ) : (
        <ReviewBox>
          <ReveiwBoxHeader className="GOOD">
            <div className="Happy_Color" />
            <p>좋았어요</p>
          </ReveiwBoxHeader>
          <ReveiwBoxBody>{hospitals.bestReview.bestContent}</ReveiwBoxBody>
        </ReviewBox>
      )}
      {hospitals.bestReview.bestId === 0 ? (
        <ReviewBox>
          <ReveiwBoxHeader className="BAD">
            <div className="Frown_Color" />
            <p>워스트 리뷰가 없습니다.</p>
            <ReviewBoxButton
              onClick={() => openReviewModal(hospitals.hospitals.id)}
            >
              리뷰쓰기
            </ReviewBoxButton>
          </ReveiwBoxHeader>
        </ReviewBox>
      ) : (
        <ReviewBox>
          <ReveiwBoxHeader className="BAD">
            <div className="Frown_Color" />
            <p>나빳어요</p>
          </ReveiwBoxHeader>
          <ReveiwBoxBody>{hospitals.worstReview.worstContent}</ReveiwBoxBody>
        </ReviewBox>
      )}
    </section>
  );
};

export default { PointReviewList };
