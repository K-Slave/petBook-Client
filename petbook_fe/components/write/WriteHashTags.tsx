import writeState, {
  WriteStateType,
} from "@atoms/pageAtoms/community/writeState";
import { replaceHash } from "@lib/modules/replaceHash";
import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  useState,
} from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
  const setWrite = useSetRecoilState(writeState);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setWrite((write) => {
      const textValue = e.currentTarget.textContent?.replace("# ", "");

      const filteredTags = write.inputHash.filter((tag) => tag !== textValue);

      return {
        ...write,
        inputHash: filteredTags,
      };
    });
  };

  return <RoundHashTagButton onClick={onClick}># {hashTag}</RoundHashTagButton>;
});

interface InputProps {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({ setIsError }: InputProps) => {
  const setWrite = useSetRecoilState(writeState);

  // TODO : 비속어 필터, 특수문자 필터, SQLinjection, XSS 등 추가 필터링 해야함

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      setWrite((write) => {
        // 중복 필터링
        if (
          write.inputHash.find(
            (hashTag) => hashTag === replaceHash(e.currentTarget.value)
          )
        ) {
          setIsError(true);
          return {
            ...write,
          };
        }

        if (write.inputHash.length >= 5) {
          setIsError(true);
          return {
            ...write,
          };
        }

        return {
          ...write,
          inputHash: [...write.inputHash, replaceHash(e.currentTarget.value)],
        };
      });

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
