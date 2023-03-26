import React, { ChangeEvent, useEffect, useState } from "react";
import OnClickOutside from "@components/common/OnClickOutside";
import Image from "next/image";
import { HospitalReveiwImgProps } from "@lib/API/petBookAPI/types/hospitalRequest";
import {
  HOSPITAL_REVIEW_CREATE,
  HOSPITAL_REVIEW_LIST,
} from "@pages/hospitalmap";
import { useQueryClient } from "@tanstack/react-query";
import { reviewFormState } from "@atoms/pageAtoms/hospitalmap/reviewState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSetResource } from "@lib/hooks/common/useResource";

import { IconBox, InputBox } from "@components/find/style/styledFindSubmit";
import {
  ReviewWarp,
  ReviewHeader,
  ReviewSelectChip,
  ReviewForm,
  ReviewFormReactionBtn,
  ReviewButtonWrap,
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
  const [reveiwIndex, setReviewIndex] = useState<number[]>([0]);
  const [newIndex, setNewIndex] = useState(1);
  const queryClient = useQueryClient();
  const reviewForm = useRecoilValue(reviewFormState);
  const { data, mutate, status } = useSetResource(HOSPITAL_REVIEW_CREATE);

  const onSubmit = () => {
    mutate(reviewForm);
    queryClient.invalidateQueries({ queryKey: HOSPITAL_REVIEW_LIST.key });
  };

  useEffect(() => {
    if (data === undefined) {
      return;
    }
    alert("리뷰등록완료");
    closeModal();
  }, [data]);

  useEffect(() => {
    document.body.classList.add("dim");
    return () => {
      document.body.classList.remove("dim");
    };
  }, []);

  const AddIndex = () => {
    setNewIndex(newIndex + 1);
    reveiwIndex.push(newIndex);
    setReviewIndex([...reveiwIndex]);
  };
  return (
    <OnClickOutside trigger={closeModal}>
      <ReviewWarp className="Review">
        <ReviewHeader>
          <p>{hospitalName}</p>
          <h3>리뷰 작성</h3>
        </ReviewHeader>

        <button
          onClick={AddIndex}
          style={{
            background: "var(--primary)",
            color: "white",
            padding: "8px 20px",
            height: "45px",
            borderRadius: "8px",
            position: "absolute",
            top: "40px",
            right: "40px",
          }}
        >
          추가
        </button>
        <div style={{ overflow: "auto", height: "551px" }}>
          {reveiwIndex.map((item) => {
            return <HospitalReviewBox hospitalId={hospitalId} key={item} />;
          })}
        </div>

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

const HospitalReviewBox = ({ hospitalId }: { hospitalId: number }) => {
  const setReviewForm = useSetRecoilState(reviewFormState);
  const onChange = (e: any) => {
    const name: string = e.target.attributes["data-type"].nodeValue;
    setReviewForm((el) => ({
      ...el,
      hospitalId: hospitalId,
      [`${name}`]: e.target.value,
    }));
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
