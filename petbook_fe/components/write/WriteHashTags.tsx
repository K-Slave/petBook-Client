import writeState from "@atoms/pageAtoms/community/writeState";
import hashTagKeydown from "@lib/handler/hashTagKeydown";
import useRecoilSelector from "@lib/hooks/common/useRecoilSelector";
import useSetHashTag from "@lib/hooks/write/useSetHashTag";
import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
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
        <WriteHashTags.List />
        <WriteHashTags.Input setIsError={setIsError} />
      </WriteHashTags.TagBox>
    </WriteHashTagsSection>
  );
};

const Title = () => {
  return (
    <HashTagTitleP className="Hash__Tag__Title">
      # 해시태그를 달아주세요
    </HashTagTitleP>
  );
};

interface TagBoxProps {
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

const TagBox = React.memo(
  ({ children, isError, setIsError }: PropsWithChildren<TagBoxProps>) => {
    const tagBoxRef = useRef<HTMLDivElement>(null);

    const onFocus: FocusEventHandler<HTMLDivElement> = (e) => {
      e.currentTarget.style.outline = "solid 1px var(--primary)";
    };

    const onBlur: FocusEventHandler<HTMLDivElement> = (e) => {
      e.currentTarget.style.removeProperty("outline");
    };

    return (
      <WriteHashDiv
        className={`Hash__Tag__Div ${isError ? "Error" : ""}`}
        ref={tagBoxRef}
        onAnimationEnd={() => {
          setIsError(false);
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </WriteHashDiv>
    );
  }
);

const List = React.memo(() => {
  const { inputHash } = useRecoilSelector(writeState, {
    inputHash: [] as string[],
  });

  return (
    <>
      {inputHash.map((hashTag) => {
        return <WriteHashTags.Item hashTag={hashTag} />;
      })}
    </>
  );
});

const Item = React.memo(({ hashTag }: { hashTag: string }) => {
  const { removeTag } = useSetHashTag();

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    removeTag(hashTag);
  };

  return <RoundHashTagButton onClick={onClick}># {hashTag}</RoundHashTagButton>;
});

interface InputProps {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({ setIsError }: InputProps) => {
  const { setTags } = useSetHashTag(setIsError);
  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    const { done } = hashTagKeydown(e, setTags, setIsError);

    if (done) {
      e.currentTarget.value = "";
    }
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    // const { done } = hashTagBlur(e, setTags, setIsError);
    e.currentTarget.value = "";

    // if (done) {
    // e.currentTarget.value = "";
    // }
  };

  return (
    <HashInput
      className="default"
      placeholder="#추가입력"
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

WriteHashTags.Title = Title;
WriteHashTags.TagBox = TagBox;
WriteHashTags.Input = Input;
WriteHashTags.List = List;
WriteHashTags.Item = Item;

export default WriteHashTags;
