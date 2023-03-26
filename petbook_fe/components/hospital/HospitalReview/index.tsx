import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import OnClickOutside from "@components/common/OnClickOutside";
import Image from "next/image";
import { HospitalReveiwImgProps } from "@lib/API/petBookAPI/types/hospitalRequest";
import {
  HOSPITAL_REVIEW_CREATE,
  HOSPITAL_REVIEW_LIST,
} from "@pages/hospitalmap";
import { useQueryClient } from "@tanstack/react-query";
import { reviewFormState } from "@atoms/pageAtoms/hospitalmap/reviewState";
import { useRecoilState } from "recoil";
import { useSetResource } from "@lib/hooks/common/useResource";

import { IconBox, InputBox } from "@components/find/style/styledFindSubmit";
import {
  ReviewWarp,
  ReviewHeader,
  ReviewSelectChip,
  ReviewForm,
  ReviewFormReactionBtn,
  ReviewButtonWrap,
  ReviewAddButton,
  ReviewBoxItem,
  ImgContainer,
  ImgBoxGroup,
  ImgBox,
} from "./styled";

const PETDATA = [
  {
    title: "토토",
    img: "",
    select: true,
  },
  {
    title: "햄순이",
    img: "",
    select: false,
  },
  {
    title: "마리",
    img: "",
    select: false,
  },
];
const REACTION = [
  {
    title: "좋았어요!",
    value: "Y",
  },
  {
    title: "나빳어요",
    value: "N",
  },
];

const ImgWrap = () => {
  const [imgArr, setImgArr] = useState<HospitalReveiwImgProps[]>([]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (imgArr.length > 10) {
        return alert("최대 10개 사진만 첨부할 수 있습니다.");
      }
      const reader = new FileReader();
      reader.onload = () => {
        const data: HospitalReveiwImgProps[] = [
          ...imgArr,
          { idx: imgArr.length, src: reader.result },
        ];
        setImgArr([...data]);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removeImg = (idx: number) => {
    const newImgWrap = [...imgArr];
    newImgWrap.splice(idx, 1);
    setImgArr([...newImgWrap]);
  };

  return (
    <ImgContainer count={imgArr.length}>
      <hgroup>
        <div className="Camera" />
        <p>이미지첨부 (최대 10장, 선택사항)</p>
        <div>
          <label htmlFor="file">
            추가하기
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              id="file"
              className="default"
              onChange={onChange}
            />
          </label>
        </div>
      </hgroup>
      <ImgBoxGroup id="group">
        {imgArr.map((item, index) => {
          return (
            <ImgBox key={index}>
              <article onClick={() => removeImg(index)} />
              <div>
                <Image width={48} height={48} src={item.src} alt="이미지" />
              </div>
            </ImgBox>
          );
        })}
      </ImgBoxGroup>
    </ImgContainer>
  );
};

const HospitalReview = ({
  closeModal,
  hospitalId,
  hospitalName,
}: {
  closeModal: () => void;
  hospitalId: number;
  hospitalName?: string;
}) => {
  const queryClient = useQueryClient();
  const [reviewForm, setReviewFrom] = useRecoilState(reviewFormState);
  const { data, mutate, status } = useSetResource(HOSPITAL_REVIEW_CREATE);

  const onSubmit = () => {
    mutate(reviewForm);
    queryClient.invalidateQueries({ queryKey: HOSPITAL_REVIEW_LIST.key });
  };

  useEffect(() => {
    if (data === undefined) return;
    alert("리뷰등록완료");
    closeModal();
  }, [data]);

  useEffect(() => {
    SetReviewDefaultObj();
    document.body.classList.add("dim");
    return () => {
      document.body.classList.remove("dim");
    };
  }, []);

  // 기본 배열요소 추가
  const SetReviewDefaultObj = async () => {
    await setReviewFrom((oldEl) => [
      ...oldEl,
      {
        hospitalId,
        content: "",
        disease: "",
        imageIds: undefined,
        experience: "",
        petName: "",
      },
    ]);
  };

  // 추가 버튼 클릭
  const AddReviewBox = async () => {
    const check = await CheckValidation("length");
    check
      ? await SetReviewDefaultObj()
      : alert("내 동물보다 더 많은 리뷰는 작성이 불가능합니다");
  };

  // 유효성 체크
  const CheckValidation = (type: string) => {
    switch (type) {
      case "length": {
        if (PETDATA.length <= reviewForm.length) {
          return false;
        } else {
          return true;
        }
      }
    }
  };

  return (
    <OnClickOutside trigger={closeModal}>
      <ReviewWarp className="Review">
        <ReviewHeader>
          <p>{hospitalName}</p>
          <h3>리뷰 작성</h3>
        </ReviewHeader>
        <ReviewAddButton onClick={AddReviewBox}>추가</ReviewAddButton>

        <ReviewBoxItem>
          {reviewForm?.map((item, index) => {
            return (
              <HospitalReviewBox
                hospitalId={hospitalId}
                key={index}
                reviewIndex={index}
              />
            );
          })}
        </ReviewBoxItem>

        <ReviewButtonWrap>
          <button type="button" value="cancel" onClick={closeModal}>
            취소
          </button>
          <button type="button" value="submit" onClick={onSubmit}>
            작성완료
          </button>
        </ReviewButtonWrap>
      </ReviewWarp>
    </OnClickOutside>
  );
};

const HospitalReviewBox = ({
  hospitalId,
  reviewIndex,
}: {
  hospitalId: number;
  reviewIndex: number;
}) => {
  const [reviewFrom, setReviewForm] = useRecoilState(reviewFormState);

  const onChange = (e: any) => {
    const name: string = e.target.attributes["data-type"].nodeValue;
    setReviewForm(
      reviewFrom.map((item, index) => {
        return index === reviewIndex
          ? { ...item, hospitalId: hospitalId, [`${name}`]: e.target.value }
          : item;
      })
    );
  };

  return (
    <section>
      <ReviewSelectChip>
        <h4>진료받은 내 동물</h4>
        <section>
          {PETDATA.map((item: { title: string; img: string }, index) => {
            const id = String(index);
            return (
              <article key={id}>
                <label htmlFor={id}>
                  <input
                    type="checkbox"
                    name="pet"
                    data-type="petName"
                    id={id}
                    value={item.title}
                    onChange={onChange}
                  />
                  <div className="Img">{item.img}</div>
                  <h5>{item.title}</h5>
                </label>
              </article>
            );
          })}
        </section>
      </ReviewSelectChip>

      <ReviewForm>
        <p>병원진료는 전반적으로</p>
        <ReviewButtonWrap>
          {REACTION.map((reaction) => {
            return (
              <ReviewFormReactionBtn
                key={reaction.value}
                htmlFor={reaction.value} // Y | N
              >
                <input
                  className="default" // 상태값으로 조절
                  type="radio"
                  name="reaction"
                  data-type="experience"
                  id={reaction.value}
                  onChange={onChange}
                  value={reaction.value === "Y" ? "GOOD" : "BAD"}
                />
                <p>
                  {reaction.value === "Y" ? (
                    <span className="Happy" />
                  ) : (
                    <span className="Frown" />
                  )}
                  <span>{reaction.title}</span>
                </p>
              </ReviewFormReactionBtn>
            );
          })}
        </ReviewButtonWrap>

        <form action="">
          <InputBox>
            <IconBox>
              <div className="Pencil" />
            </IconBox>
            <input
              onChange={onChange}
              data-type="content"
              type="text"
              placeholder="어떤 증상으로 병원에 방문하셨나요?"
            />
          </InputBox>
          <InputBox>
            <IconBox>
              <div className="Medical" />
            </IconBox>
            <textarea
              onChange={onChange}
              data-type="disease"
              cols={30}
              rows={10}
              placeholder="병원에서 느낀 점을 자유롭게 작성해주세요."
            />
          </InputBox>
          <HospitalReview.ImgWrap />
        </form>
      </ReviewForm>
    </section>
  );
};
HospitalReview.ImgWrap = ImgWrap;

export default HospitalReview;
