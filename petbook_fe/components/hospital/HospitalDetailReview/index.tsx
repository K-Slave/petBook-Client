import React, { useState } from "react";
import { usePage } from "@components/common/Pagination/usePagination";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import {
  HOSPITAL_REVIEW_LIST,
  HOSPITAL_REVIEW_REMOVE,
} from "@pages/hospitalmap";
import { HospitalReveiwRequest } from "@lib/API/petBookAPI/types/hospitalRequest";
import useModal from "@lib/hooks/common/useModal";
import useResource from "@lib/hooks/common/useResource";
import useUserInfo from "@lib/hooks/common/useUserInfo";
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
  const { userData } = useUserInfo();

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
        {data && (
          <h3>
            리뷰 <span>{data?.data.totalElements}</span>
          </h3>
        )}
      </ReviewContainerHeader>
      {data?.data.reviews.map((item) => {
        console.log(item);
        return (
          <ReviewBox key={item.id}>
            <ReviewBoxHeader>
              <div className="Profile">프로필</div>
              <div className="Info">
                <p className={`State ${item.experience}`}>
                  {item.experience === "BAD" ? "나빳어요" : "좋았어요"}
                </p>
                <p>
                  {item.user.nickname}
                  <span>{item.createdAt.substring(0, 10)}</span>
                </p>
              </div>
              {userData?.id === item.user.id && (
                <HospitalDetailReview.SettingBtn item={item} />
              )}
            </ReviewBoxHeader>
            <ReviewBoxImgSlide state={item.images}>
              {item.images?.map((img) => {
                return <div key={img.id}>{(img.imageUrl, img.id)}</div>;
              })}
            </ReviewBoxImgSlide>
            <ReviewBoxContent>{item.content}</ReviewBoxContent>
          </ReviewBox>
        );
      })}
    </ReviewContainer>
  );
};

const SettingBtn = ({ item }: { item: HospitalReveiwRequest }) => {
  const [btnState, setBtnState] = useState(false);
  const { openModal, closeModal } = useModal();
  const { mutate } = useMutation(HOSPITAL_REVIEW_REMOVE.requester);
  const onClick = () => {
    setBtnState(!btnState);
  };
  const openReviewModal = (hospitalId: number) => {
    openModal(HospitalReview, {
      closeModal,
      hospitalId,
    });
  };

  const deleteReview = (id: number) => {
    mutate(
      { pathParam: `/review/${id}` },
      {
        onError: (e: any) => {
          alert(e.response.data.message);
        },
      }
    );
  };

  const removeReview = (id: number) => {
    deleteReview(id);
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
          <li onClick={() => openReviewModal(item.hospital.id)}>수정</li>
          <li onClick={() => removeReview(item.id)}>삭제</li>
          <li onClick={reportReview}>신고</li>
        </ul>
      </article>
      {/* )} */}
    </ReviewBoxMoreWrap>
  );
};
HospitalDetailReview.SettingBtn = SettingBtn;

export default HospitalDetailReview;
