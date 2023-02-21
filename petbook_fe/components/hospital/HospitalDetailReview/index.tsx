import { usePage } from "@components/common/Pagination/usePagination";
import { hospitalRequest } from "@lib/API/petBookAPI";
import useUserId from "@lib/hooks/article/useUserId";
import useResource, { createResource } from "@lib/hooks/common/useResource";
import { useRouter } from "next/router";
import React, { useState } from "react";
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

// 임시용
const DetailList = {
  review: [
    {
      id: 2,
      hospital: {
        id: 3397,
        name: "제니스동물병원",
      },
      user: {
        id: 1,
        nickname: "테스트1",
      },
      disease: "string",
      content:
        "“리뷰가 들어갑니다. 리뷰가 들어갑니다. 리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.”",
      images: [
        {
          id: 2,
          imageUrl: "",
        },
      ],
      isLike: false,
      likeCount: 0,
      experience: "BAD",
    },
    {
      id: 3,
      hospital: {
        id: 3397,
        name: "제니스동물병원",
      },
      user: {
        id: 1,
        nickname: "테스트",
      },
      disease: "string",
      content:
        "“리뷰가 들어갑니다. 리뷰가 들어갑니다. 리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.”",
      images: [
        {
          id: 2,
          imageUrl: "",
        },
        {
          id: 2,
          imageUrl: "",
        },
      ],
      isLike: false,
      likeCount: 0,
      experience: "GOOD",
    },
    {
      id: 4,
      hospital: {
        id: 3397,
        name: "제니스동물병원",
      },
      user: {
        id: 1,
        nickname: "테스트",
      },
      disease: "string",
      content:
        "“리뷰가 들어갑니다. 리뷰가 들어갑니다. 리뷰가 들어갑니다.리뷰가 들어갑니다.리뷰가 들어갑니다.”",
      images: [],
      isLike: false,
      likeCount: 0,
      experience: "GOOD",
    },
  ],
  totalElements: 99,
};

const HOSPITAL_REVIEW_LIST = createResource({
  key: ["HOSPITAL_REVIEW_LIST"],
  fetcher: hospitalRequest.hospital_review_list,
});

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
      {DetailList.review.map((item) => {
        return (
          <ReviewBox key={item.id}>
            <ReviewBoxHeader>
              <div className="profile">프로필</div>
              <div className="info">
                <p className={`state ${item.experience}`}>
                  {item.experience === "BAD" ? "나빳어요" : "좋았어요"}
                </p>
                <p>
                  {item.user.nickname} <span>2022.01.01</span>
                </p>
              </div>
              {/* btn */}
              <HospitalDetailReview.SettingBtn />
              {/* btn */}
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

const SettingBtn = () => {
  const [btnState, setBtnState] = useState(false);
  const onClick = () => {
    setBtnState(!btnState);
  };

  return (
    <ReviewBoxMoreWrap btnState={btnState}>
      <ReviewBtn onClick={onClick}>
        <div className="More" />
      </ReviewBtn>
      {btnState && (
        <article>
          <ul>
            <li>수정</li>
            <li>삭제</li>
            <li>신고</li>
          </ul>
        </article>
      )}
    </ReviewBoxMoreWrap>
  );
};
HospitalDetailReview.SettingBtn = SettingBtn;

export default HospitalDetailReview;
