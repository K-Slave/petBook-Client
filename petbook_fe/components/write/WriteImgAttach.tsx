import writeState from "@atoms/pageAtoms/community/writeState";
import useMemoRecoilValue from "@lib/hooks/common/useMemoRecoilValue";
import Image from "next/image";
import React, { PropsWithChildren, useMemo, useRef } from "react";
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
        <CountProvider />
      </WriteImgAttach.InfoBox>
      <ImgProvider />
      <WriteImgAttach.AddButton />
    </WriteImgAttachSection>
  );
};

const CountProvider = () => {
  const { inputImg } = useRecoilValue(writeState);
  const dd = useMemoRecoilValue(writeState, "inputImg");

  return <CountProvider.Count imgLength={inputImg.length} />;
};

const Count = React.memo(({ imgLength }: { imgLength: number }) => {
  return (
    <CountP>
      <span className="Img__Selected__Length">{imgLength}</span>
      /5
    </CountP>
  );
});

const ImgProvider = () => {
  const { inputImg } = useRecoilValue(writeState);

  return <ImgProvider.ImgList inputImg={inputImg} />;
};

const ImgList = React.memo(({ inputImg }: { inputImg: string[] }) => {
  console.log("List render");

  return (
    <ImgListUl>
      {inputImg.map((img) => (
        <ImgProvider.ImgItem key={img} img={img} />
      ))}
    </ImgListUl>
  );
});

const ImgItem = React.memo(({ img }: { img: string }) => {
  console.log("Item render");

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
        imgInput.setAttribute("accept", "image/jpg");
        imgInput.setAttribute("aria-label", "이미지 첨부 버튼");
        imgInput.setAttribute("aria-labelledby", "이미지 첨부 버튼");
        imgInput.click();

        imgInput.onchange = (changeEvent) => {
          const fileList = imgInput.files;

          if (!fileList) return undefined;

          // const key = `img_${new Date().getTime().toString()}.jpg`;
          // const img = new Image();
          const reader = new FileReader();

          for (const file of fileList) {
            reader.readAsDataURL(file);
          }

          reader.onload = () => {
            setWrite((write) => ({
              ...write,
              inputImg: [...write.inputImg, reader.result as string],
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
CountProvider.Count = Count;
ImgProvider.ImgList = ImgList;
ImgProvider.ImgItem = ImgItem;

export default WriteImgAttach;
