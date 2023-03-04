import React from "react";
import { ReviewBox, ReveiwBoxHeader, ReveiwBoxBody } from "./styled";

export const PointReviewList = () => {
  return (
    <section>
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
    </section>
  );
};

export default { PointReviewList };
