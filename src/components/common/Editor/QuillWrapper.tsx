import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Skeleton from "../Skeleton/Skeleton";

const QuillLoader = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <Skeleton template="white" borderRadius="8px" animation={false} />
  ),
});

/** */
type Props = {
  theme?: "snow" | "bubble" | undefined;
  onChange?: (
    value: string,
    delta: any,
    source: any,
    editor: ReactQuill.UnprivilegedEditor
  ) => void;
  onKeyPress: (event: any) => void;
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
  theme: "snow",
  placeholder: "",
  onChange: () => {},
};

export default QuillWrapper;
