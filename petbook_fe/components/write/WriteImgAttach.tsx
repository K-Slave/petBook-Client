import writeState, {
  WriteStateType,
} from "@atoms/pageAtoms/community/writeState";
import useRecoilSelector from "@lib/hooks/common/useRecoilSelector";
import Image from "next/image";
import React, { PropsWithChildren, useRef } from "react";
import { BsPlus } from "react-icons/bs";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  AddButtonBox,
  CountP,
  ImgItemLi,
  ImgListUl,
  InfoBoxDiv,
  TitleP,
  WriteImgAttachSection,
} from "./styled/styledWriteImgAttach";

const WriteImgAttach = () => {
  return (
    <WriteImgAttachSection>
      <WriteImgAttach.InfoBox>
        <WriteImgAttach.Title />
        <WriteImgAttach.Count />
      </WriteImgAttach.InfoBox>
      <WriteImgAttach.ImgList />
      <WriteImgAttach.AddButton />
    </WriteImgAttachSection>
  );
};

const Count = React.memo(() => {
  const inputImg = useRecoilSelector<WriteStateType["inputImg"]>(
    writeState,
    "inputImg"
  );

  return (
    <CountP>
      <span className="Img__Selected__Length">{inputImg.length}</span>
      /5
    </CountP>
  );
});

const ImgList = React.memo(() => {
  const inputImg = useRecoilSelector<WriteStateType["inputImg"]>(
    writeState,
    "inputImg"
  );

  // const { inputImg } = useRecoilValue(writeState);

  console.log("render");

  return (
    <ImgListUl>
      {inputImg.map((img) => (
        <WriteImgAttach.ImgItem key={img} img={img} />
      ))}
    </ImgListUl>
  );
});

const ImgItem = React.memo(({ img }: { img: string }) => {
  return (
    <ImgItemLi>
      <Image
        className="Selected__Img"
        src={img}
        alt="선택된 이미지"
        width={77}
        height={77}
      />
    </ImgItemLi>
  );
});

const InfoBox = ({ children }: PropsWithChildren<any>) => {
  return <InfoBoxDiv>{children}</InfoBoxDiv>;
};

const Title = () => {
  return <TitleP className="Img__Section__Title">이미지 첨부</TitleP>;
};

// TODO 기능 리팩터링 해야함
const AddButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const setWrite = useSetRecoilState(writeState);

  return (
    <AddButtonBox
      type="button"
      ref={btnRef}
      onClick={(clickEvent) => {
        const imgInput = document?.createElement("input");
        imgInput.setAttribute("class", "default");
        imgInput.setAttribute("type", "file");
        imgInput.setAttribute("accept", "image/*");
        imgInput.setAttribute("aria-label", "이미지 첨부 버튼");
        imgInput.setAttribute("aria-labelledby", "이미지 첨부 버튼");
        imgInput.click();

        imgInput.onchange = (changeEvent) => {
          const fileList = imgInput && imgInput.files && imgInput.files[0];

          if (!fileList) return undefined;

          const reader = new FileReader();
          reader.readAsDataURL(fileList);

          reader.onload = () => {
            setWrite((write) => ({
              ...write,
              inputImg: [...write.inputImg, reader.result as string],
              inputFile: fileList,
            }));
          };

          return undefined;
        };
      }}
    >
      <BsPlus className="Img__Section__Icon" />
    </AddButtonBox>
  );
};

WriteImgAttach.InfoBox = InfoBox;
WriteImgAttach.Title = Title;
WriteImgAttach.AddButton = AddButton;
WriteImgAttach.Count = Count;
WriteImgAttach.ImgList = ImgList;
WriteImgAttach.ImgItem = ImgItem;

export default WriteImgAttach;
