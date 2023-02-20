import React from "react";
import {
  ReviewBox,
  ReviewBoxContent,
  ReviewBoxHeader,
  ReviewBoxImgSlide,
  ReviewContainer,
  ReviewContainerHeader,
} from "./styled";

const DetailList = [
  {
    id: 0,
    content:
      "리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.",
    imgArr: [0, 1, 2, 3],
  },
  {
    id: 1,
    content:
      "리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.",
    imgArr: [0, 1, 2, 3],
  },
  {
    id: 2,
    content:
      "리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.",
    imgArr: [0, 1, 2, 3],
  },
  {
    id: 3,
    content:
      "리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.",
    imgArr: [0, 1, 2, 3],
  },
  {
    id: 4,
    content:
      "리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.",
    imgArr: [0, 1, 2, 3],
  },
];

const HospitalDetailReview = () => {
  return (
    <ReviewContainer>
      <ReviewContainerHeader>
        <h3>
          리뷰 <span>999+</span>
        </h3>
      </ReviewContainerHeader>
      {DetailList.map((item) => {
        return (
          <ReviewBox>
            <ReviewBoxHeader>
              <div className="profile">로고</div>
              <div className="info">
                <p className="state">나빳어요</p>
                <p>
                  닉네임 <span>2022.01.01</span>
                </p>
              </div>
              {/* 여기 분리 예정 */}
              <div className="icon">
                <div className="More" />
              </div>
            </ReviewBoxHeader>
            <ReviewBoxImgSlide>
              {item.imgArr.map((img) => {
                return <div>{img}</div>;
              })}
            </ReviewBoxImgSlide>
            <ReviewBoxContent>{item.content}</ReviewBoxContent>
          </ReviewBox>
        );
      })}
    </ReviewContainer>
  );
};

export default HospitalDetailReview;
