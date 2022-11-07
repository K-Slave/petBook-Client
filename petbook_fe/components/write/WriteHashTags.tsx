import writeState, {
  WriteStateType,
} from "@atoms/pageAtoms/community/writeState";
import hashTagKeydown from "@lib/handler/hashTagKeydown";
import useHashTagClear from "@lib/hooks/write/useHashTagClear";
import useHashTagInput from "@lib/hooks/write/useHashTagInput";
import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  useState,
} from "react";
import { useRecoilValue } from "recoil";
import {
  HashInput,
  HashTagTitleP,
  RoundHashTagButton,
  WriteHashDiv,
  WriteHashTagsSection,
} from "./styled/styledWriteHashTags";

// TODO : 최대 5개 구현, 요소가 HashTagBox 넘어가지 않도록 구현
const WriteHashTags = () => {
  const [isError, setIsError] = useState(false);

  return (
    <WriteHashTagsSection>
      <WriteHashTags.Title />
      <WriteHashTags.TagBox isError={isError} setIsError={setIsError}>
        <WriteHashTags.ListProvider />
        <WriteHashTags.Input setIsError={setIsError} />
      </WriteHashTags.TagBox>
    </WriteHashTagsSection>
  );
};

const Title = () => {
  return <HashTagTitleP className="Hash__Tag__Title">해시태그</HashTagTitleP>;
};

interface TagBoxProps {
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

const TagBox = React.memo(
  ({ children, isError, setIsError }: PropsWithChildren<TagBoxProps>) => {
    return (
      <WriteHashDiv
        className={`Hash__Tag__Div ${isError ? "Error" : ""}`}
        onAnimationEnd={() => {
          setIsError(false);
        }}
      >
        {children}
      </WriteHashDiv>
    );
  }
);

const ListProvider = () => {
  const write = useRecoilValue(writeState);

  return <RoundBoxList inputHash={write.inputHash} />;
};

const RoundBoxList = React.memo(
  ({ inputHash }: { inputHash: WriteStateType["inputHash"] }) => {
    return (
      <>
        {inputHash.map((hashTag) => {
          return <RoundBox key={`${hashTag}`} hashTag={hashTag} />;
        })}
      </>
    );
  }
);

const RoundBox = React.memo(({ hashTag }: { hashTag: string }) => {
  const setClear = useHashTagClear();
  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setClear(e);
  };

  return <RoundHashTagButton onClick={onClick}># {hashTag}</RoundHashTagButton>;
});

interface InputProps {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({ setIsError }: InputProps) => {
  const setInput = useHashTagInput(setIsError);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { done, info } = hashTagKeydown(e, setInput);

    if (info === "space") {
      setIsError(true);
    }

    if (done) {
      e.currentTarget.value = "";
    }
  };

  return (
    <HashInput
      className="default"
      placeholder="# 입력 (최대 5개)"
      onKeyDown={onKeyDown}
    />
  );
};

WriteHashTags.Title = Title;
WriteHashTags.TagBox = TagBox;
WriteHashTags.Input = Input;
WriteHashTags.ListProvider = ListProvider;

export default WriteHashTags;
