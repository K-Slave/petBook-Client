import React from "react";
import { HospitalFullInfo } from "@lib/API/petBookAPI/types/hospitalRequest";
import {
  ReviewBox,
  ReveiwBoxHeader,
  ReveiwBoxBody,
  ReviewBoxButton,
} from "./styled";

export const PointReviewList = (hospitals: HospitalFullInfo) => {
  return (
    <section>
      {hospitals.worstReview.worstId === 0 ? (
        <ReviewBox>
          <ReveiwBoxHeader className="GOOD">
            <div className="Happy_Color" />
            <p>베스트 리뷰가 없습니다.</p>
            <ReviewBoxButton>리뷰쓰기</ReviewBoxButton>
          </ReveiwBoxHeader>
        </ReviewBox>
      ) : (
        <ReviewBox>
          <ReveiwBoxHeader className="GOOD">
            <div className="Happy_Color" />
            <p>좋았어요</p>
          </ReveiwBoxHeader>
          <ReveiwBoxBody>
            “리뷰가 들어갑니다. 리뷰가 들어갑니다. 리뷰가 들어갑니다.리뷰가
            들어갑니다.리뷰가 들어갑니다.”
          </ReveiwBoxBody>
        </ReviewBox>
      )}
      {hospitals.bestReview.bestId === 0 ? (
        <ReviewBox>
          <ReveiwBoxHeader className="BAD">
            <div className="Frown_Color" />
            <p>워스트 리뷰가 없습니다.</p>
            <ReviewBoxButton>리뷰쓰기</ReviewBoxButton>
          </ReveiwBoxHeader>
        </ReviewBox>
      ) : (
        <ReviewBox>
          <ReveiwBoxHeader className="BAD">
            <div className="Frown_Color" />
            <p>나빳어요</p>
          </ReveiwBoxHeader>
          <ReveiwBoxBody>
            “리뷰가 들어갑니다. 리뷰가 들어갑니다. 리뷰가 들어갑니다.리뷰가
            들어갑니다.리뷰가 들어갑니다.”
          </ReveiwBoxBody>
        </ReviewBox>
      )}
    </section>
  );
};

export default { PointReviewList };
