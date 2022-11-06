import { PropsWithChildren } from "react";
import { BsPlus } from "react-icons/bs";
import { WriteImgAttachSection } from "./styled/styledWriteImgAttach";

const WriteImgAttach = () => {
  return (
    <WriteImgAttachSection>
      <WriteImgAttach.InfoBox>
        <WriteImgAttach.Title />
        <WriteImgAttach.Count />
      </WriteImgAttach.InfoBox>
      <WriteImgAttach.ImgList />
      <WriteImgAttach.Button />
    </WriteImgAttachSection>
  );
};

const InfoBox = ({ children }: PropsWithChildren<any>) => {
  return <>{children}</>;
};

const Title = () => {
  return <p className="Img__Section__Title">이미지 첨부</p>;
};

const Count = () => {
  return <p>0/5</p>;
};

const ImgList = () => {
  return <></>;
};

const Button = () => {
  return (
    <button type="button">
      <BsPlus className="Img__Section__Icon" />
    </button>
  );
};

WriteImgAttach.InfoBox = InfoBox;
WriteImgAttach.Title = Title;
WriteImgAttach.Count = Count;
WriteImgAttach.ImgList = ImgList;
WriteImgAttach.Button = Button;

export default WriteImgAttach;
