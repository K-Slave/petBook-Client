import QuillWrapper from "@components/common/Editor/QuillWrapper";
import useRecoilSelector from "@lib/hooks/common/useRecoilSelector";
import useSelectorState from "@lib/hooks/common/useSelectorState";
import localConsole from "@lib/utils/localConsole";
import React, {
  ChangeEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";
import ReactQuill from "react-quill";
import writeState from "../../atoms/pageAtoms/community/writeState";
import {
  WriteEditorDiv,
  WriteTitleInput,
  WriteFormSection,
  WriteGuideDiv,
  WriteContentLengthP,
} from "./styled/styledWriteForm";

const WriteForm = () => {
  return (
    <WriteFormSection>
      <WriteForm.Input />
      <WriteForm.Guide />
      <WriteForm.Editor />
    </WriteFormSection>
  );
};

const Input = () => {
  const [{ inputTitle }, setWrite] = useSelectorState(writeState, {
    inputTitle: "",
  });
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setWrite((write) => ({ ...write, inputTitle: e.target.value }));
  };

  return (
    <WriteTitleInput
      className="Write__Input default"
      placeholder="제목을 입력하세요"
      onChange={onChange}
      value={inputTitle}
    />
  );
};

const Guide = () => {
  const { selectedCategory } = useRecoilSelector(writeState, {
    selectedCategory: {
      idx: 0,
      name: "",
    },
  });

  return (
    <WriteGuideDiv className="Write__Guide">
      <h5 className="Write__Guide__Title">{selectedCategory.name} ?</h5>
      <p className="Write__Guide__Content">
        {/* {selectedCategory.name}을 쓰는 방법에 대한 가이드가 올라갑니다. */}
        {`
          궁금한
          것을 자유롭게 질문해보세요! -(내 아이 품종) -(내 아이 나이) -(내 아이
          특징) 등을 작성하면 답변에 큰 도움이 될 수 있어요!
        `}
      </p>
    </WriteGuideDiv>
  );
};

const Editor = () => {
  const [{ inputContent }, setWrite] = useSelectorState(writeState, {
    inputContent: "",
  });
  const editorRef = useRef<HTMLDivElement>(null);
  const [readOnly, setReadOnly] = useState(false);

  const pureText = inputContent.replace(
    /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/gi,
    ""
  );

  const keyList = [
    "Backspace",
    "ArrowUp",
    "ArrowRight",
    "ArrowDown",
    "ArrowLeft",
    "Meta",
    "Alt",
    "Shift",
    "CapsLock",
    "Tab",
    "Escape",
  ];

  const onKeyPress: KeyboardEventHandler = (event) => {
    if (event.nativeEvent.isComposing) {
      event.preventDefault();
      event.stopPropagation();
      event.defaultPrevented = true;

      return false;
    }

    if (pureText.length >= 490) {
      localConsole?.log(event, "event");
    }

    if (
      !keyList.includes(event.key) &&
      !keyList.includes(event.nativeEvent.key) &&
      pureText.length >= 500
    ) {
      // setReadOnly(true);
      event.preventDefault();
      event.stopPropagation();
      event.defaultPrevented = true;
      return false;
    }

    if (readOnly) {
      // setReadOnly(false);
    }
  };

  const onChange = (
    value: string,
    delta: any,
    source: any,
    editor: ReactQuill.UnprivilegedEditor
  ) => {
    // localConsole?.log(delta, "delta");

    if (pureText.length >= 500) {
      setWrite((write) => ({ ...write }));
      return "";
    }

    setWrite((write) => ({ ...write, inputContent: value }));
  };

  localConsole?.log(readOnly, "readOnly");

  return (
    <WriteEditorDiv
      className="Write__Editor__Wrap"
      ref={editorRef}
      onKeyDown={onKeyPress}
      onKeyUp={onKeyPress}
      onKeyDownCapture={onKeyPress}
      onKeyUpCapture={onKeyPress}
      onKeyPress={onKeyPress}
      onKeyPressCapture={onKeyPress}
    >
      <QuillWrapper
        theme="snow"
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="내용을 입력하세요"
        value={inputContent}
        readOnly={readOnly}
      />
      {/* <WriteForm.Length pureText={pureText} /> */}
    </WriteEditorDiv>
  );
};

// const Length = ({ pureText }: { pureText: string }) => {
//   const MaxRef = useRef<HTMLSpanElement>(null);

//   if (
//     MaxRef.current &&
//     pureText.length >= 500 &&
//     MaxRef.current.style.color !== "#FF512B"
//   ) {
//     MaxRef.current.style.color = "#FF512B";
//   }

//   if (
//     MaxRef.current &&
//     pureText.length < 500 &&
//     MaxRef.current.style.color === "rgb(255, 81, 43)"
//   ) {
//     MaxRef.current.style.removeProperty("color");
//   }

//   return (
//     <WriteContentLengthP className="Editor__Content__Length">
//       <span className="Max__Length" ref={MaxRef}>
//         {/* {pureText.length >= 500 ? 500 : pureText.length} */}
//         {pureText.length}
//       </span>
//       /500
//     </WriteContentLengthP>
//   );
// };

WriteForm.Input = Input;
WriteForm.Guide = Guide;
WriteForm.Editor = Editor;
// WriteForm.Length = Length;

export default WriteForm;
