import writeState from "@atoms/pageAtoms/community/writeState";
import useRecoilSelector from "@lib/hooks/common/useRecoilSelector";
import useSelectorState from "@lib/hooks/common/useSelectorState";
import Image from "next/image";
import React, { PropsWithChildren, useRef } from "react";
import { BsPlus } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { useSetRecoilState } from "recoil";
import {
  AddButtonBox,
  CountP,
  IllustImg,
  ImgItemLi,
  ImgListUl,
  InfoBoxDiv,
  TitleP,
  WriteImgAttachSection,
} from "./styled/styledWriteImgAttach";

const WriteImgAttach = () => {
  return (
    <WriteImgAttachSection>
      <WriteImgAttach.Illust />
      <WriteImgAttach.InfoBox>
        <WriteImgAttach.Title />
        <WriteImgAttach.Count />
      </WriteImgAttach.InfoBox>
      <WriteImgAttach.ImgList />
      <WriteImgAttach.AddButton />
    </WriteImgAttachSection>
  );
};

const Illust = () => {
  return <IllustImg src="" alt="" />;
};

const InfoBox = ({ children }: PropsWithChildren<any>) => {
  return <InfoBoxDiv>{children}</InfoBoxDiv>;
};

const Title = () => {
  return <TitleP className="Img__Section__Title">이미지첨부</TitleP>;
};

const Count = React.memo(() => {
  // const { inputImg } = useRecoilSelector(writeState, {
  //   inputImg: [] as string[],
  // });

  return <CountP>최대 5장</CountP>;
});

const ImgList = React.memo(() => {
  const { inputImg } = useRecoilSelector(writeState, {
    inputImg: [] as string[],
  });

  if (inputImg && inputImg.length > 0) {
    return (
      <ImgListUl>
        {inputImg.map((img) => (
          <WriteImgAttach.ImgItem key={img} img={img} />
        ))}
      </ImgListUl>
    );
  }
  return <></>;
});

const ImgItem = React.memo(({ img }: { img: string }) => {
  const setWrite = useSetRecoilState(writeState);

  const onClick = () => {
    setWrite((write) => ({
      ...write,
      inputImg: write.inputImg.filter((imgItem) => imgItem !== img),
    }));
  };

  return (
    <ImgItemLi>
      <Image
        className="Selected__Img"
        src={img}
        alt="선택된 이미지"
        width={77}
        height={77}
      />
      <button type="button" className="Cancle__Button" onClick={onClick}>
        <IoIosClose />
      </button>
    </ImgItemLi>
  );
});

// TODO 기능 리팩터링 해야함
const AddButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [{ inputImg }, setWrite] = useSelectorState(writeState, {
    inputImg: [] as string[],
  });

  if (inputImg.length >= 5) {
    return <></>;
  }

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
      추가하기
    </AddButtonBox>
  );
};

WriteImgAttach.Illust = Illust;
WriteImgAttach.InfoBox = InfoBox;
WriteImgAttach.Title = Title;
WriteImgAttach.AddButton = AddButton;
WriteImgAttach.Count = Count;
WriteImgAttach.ImgList = ImgList;
WriteImgAttach.ImgItem = ImgItem;

export default WriteImgAttach;
