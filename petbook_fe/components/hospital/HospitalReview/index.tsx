import React, { useEffect } from "react";
import {
  ReviewWarp,
  ReviewHeader,
  ReviewSelectChip,
  ReviewForm,
  ReviewFormReactionBtn,
  ReviewButtonWrap,
  ImgContainer,
} from "./styled";

// 가라데이터
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
  {
    title: "거북이",
    img: "",
  },
  {
    title: "거북이",
    img: "",
  },
];
// 버튼!
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
  return (
    <ImgContainer>
      <hgroup>
        <div>
          <p>이미지첨부 (최대 10장, 선택사항)</p>
        </div>
        <div>
          <label htmlFor="file">
            파일 선택
            <input type="file" className="default" id="file" />
          </label>
        </div>
      </hgroup>
    </ImgContainer>
  );
};
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
              {/* 좋았어요 || 나빳어요! */}
              {REACTION.map((reaction) => {
                return (
                  <ReviewFormReactionBtn
                    htmlFor={reaction.value} // Y | N
                  >
                    <input
                      type="radio"
                      name="reaction"
                      id={reaction.value}
                      className="default" // 상태값으로 조절
                    />
                    <p>
                      {reaction.value === "Y" ? (
                        <div className="Happy" />
                      ) : (
                        <div className="Frown" />
                      )}
                      <span>{reaction.title}</span>
                    </p>
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
              <HospitalReview.ImgWrap />
            </form>
          </ReviewForm>

          <ReviewButtonWrap>
            <button type="button" value="cancel">
              취소
            </button>
            <button type="button" value="submit">
              작성완료
            </button>
          </ReviewButtonWrap>
        </ReviewWarp>
      )}
    </>
  );
};
HospitalReview.ImgWrap = ImgWrap;

export default HospitalReview;
