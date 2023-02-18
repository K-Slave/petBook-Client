import React, { useEffect } from "react";
import {
  ReviewWarp,
  ReviewHeader,
  ReviewSelectChip,
  ReviewForm,
  ReviewFormReactionBtn,
  ReviewButtonWrap,
} from "./styled";

const PETDATA = [
  {
    title: "토끼",
    img: "",
  },
  {
    title: "햄찌",
    img: "",
  },
  {
    title: "거북이",
    img: "",
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
const HospitalReview = ({ modalState }: { modalState: boolean }) => {
  useEffect(() => {
    if (modalState === true) {
      document.body.classList.add("dim");
    }
  }, [modalState]);

  return (
    <>
      {modalState && (
        <ReviewWarp className="Review">
          <ReviewHeader>
            <p>$ 병원명 $</p>
            <h3>리뷰 작성</h3>
          </ReviewHeader>
          <ReviewSelectChip>
            <li className="My">
              <div className="Img">img</div>
              <h4>진료받은 내 동물</h4>
            </li>
            {PETDATA.map((item: { title: string; img: string }) => {
              return (
                <li key={item.title}>
                  <div className="Img">{item.img}</div>
                  <h4>{item.title}</h4>
                </li>
              );
            })}
          </ReviewSelectChip>
          <ReviewForm>
            <p>병원진료는 전반적으로</p>
            <ReviewButtonWrap>
              {REACTION.map((reaction) => {
                return (
                  <ReviewFormReactionBtn
                    key={reaction.value}
                    htmlFor={reaction.value}
                    className="on"
                  >
                    <input
                      type="radio"
                      name="reaction"
                      id={reaction.value}
                      className="on default" // 상태값으로 조절
                    />
                    {reaction.title}
                  </ReviewFormReactionBtn>
                );
              })}
            </ReviewButtonWrap>
            <form action="">
              <input
                type="text"
                placeholder="어떤 증상으로 병원에 방문하셨나요?"
              />
              <textarea
                cols={30}
                rows={10}
                placeholder="병원에서 느낀 점을 자유롭게 작성해주세요."
              />
              <input type="file" />
            </form>
          </ReviewForm>
          <ReviewButtonWrap>
            <button type="button">취소</button>
            <button type="button">작성완료</button>
          </ReviewButtonWrap>
        </ReviewWarp>
      )}
    </>
  );
};

export default HospitalReview;
