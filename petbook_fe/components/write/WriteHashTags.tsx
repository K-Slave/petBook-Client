import writeState, {
  WriteStateType,
} from "@atoms/pageAtoms/community/writeState";
import { replaceHash } from "@lib/modules/replaceHash";
import React, { KeyboardEventHandler, PropsWithChildren } from "react";
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
  return (
    <WriteHashTagsSection>
      <WriteHashTags.Title />
      <WriteHashTags.TagBox>
        <WriteHashTags.ListProvider />
        <WriteHashTags.Input />
      </WriteHashTags.TagBox>
    </WriteHashTagsSection>
  );
};

const Title = () => {
  return <HashTagTitleP className="Hash__Tag__Title">해시태그</HashTagTitleP>;
};

const TagBox = ({ children }: PropsWithChildren<any>) => {
  return <WriteHashDiv className="Hash__Tag__Div">{children}</WriteHashDiv>;
};

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
  return <RoundHashTagButton># {hashTag}</RoundHashTagButton>;
});

const Input = () => {
  const setWrite = useSetRecoilState(writeState);

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      setWrite((write) => {
        replaceHash(e.currentTarget.value);
        if (
          write.inputHash.find((hashTag) => hashTag === e.currentTarget.value)
        ) {
          return {
            ...write,
          };
        }

        return {
          ...write,
          inputHash: [...write.inputHash, e.currentTarget.value],
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
