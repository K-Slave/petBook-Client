import { IconBox, InputBox } from "@components/find/style/styledFindSubmit";
import React, { ChangeEvent, useEffect, useState } from "react";
import { imgRequest } from "@lib/API/petBookAPI";
import Image from "next/image";
import { createRequest, useSetResource } from "@lib/hooks/common/useResource";
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

const IMG_CREATE = createRequest({
  key: ["IMG_CREATE"],
  requester: imgRequest.img_create,
});

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

interface Props {
  idx: number;
  src: string | ArrayBuffer | null | undefined | any;
}

const ImgWrap = () => {
  const [imgArr, setImgArr] = useState<Props[]>([]);
  // const imgMutation = useSetResource(IMG_CREATE); 업로드시 사용
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (imgArr.length > 10) {
        return alert("최대 10개 사진만 첨부할 수 있습니다.");
      }
      const reader = new FileReader();
      reader.onload = () => {
        const data: Props[] = [
          ...imgArr,
          { idx: imgArr.length, src: reader.result },
        ];
        setImgArr([...data]);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removeImg = (idx: number) => {
    let newImgWrap = [...imgArr];
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
              <InputBox>
                <IconBox>
                  <div className="Pencil" />
                </IconBox>
                <input
                  type="text"
                  placeholder="어떤 증상으로 병원에 방문하셨나요?"
                />
              </InputBox>
              <InputBox>
                <IconBox>
                  <div className="Medical" />
                </IconBox>
                <textarea
                  cols={30}
                  rows={10}
                  placeholder="병원에서 느낀 점을 자유롭게 작성해주세요."
                />
              </InputBox>
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
