import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Skeleton from "@/stories/common/Skeleton";

const QuillLoader = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <Skeleton template="white" borderRadius="8px" animation={false} />
  ),
});

type Props = {
  theme?: "snow" | "bubble" | undefined;
  onChange?: (
    value: string,
    delta: any,
    source: any,
    editor: ReactQuill.UnprivilegedEditor
  ) => void;
  onKeyPress?: (event: any) => void;
  placeholder?: string | undefined;
  value: string;
  readOnly: boolean;
};

const QuillWrapper = ({
  theme,
  onChange,
  onKeyPress,
  placeholder,
  value,
  readOnly,
}: Props) => {
  return (
    <QuillLoader
      theme={theme}
      onChange={onChange}
      placeholder={placeholder}
      onKeyPress={onKeyPress}
      onKeyDown={onKeyPress}
      onKeyUp={onKeyPress}
      value={value}
      readOnly={readOnly}
    />
  );
};

QuillWrapper.defaultProps = {
  theme: "snow" as const,
  placeholder: "",
  onChange: () => {},
};

export default QuillWrapper;
