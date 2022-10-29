import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const QuillLoader = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

type Props = {
  theme?: "snow" | "bubble" | undefined;
  onChange: (value: string) => void;
  placeholder?: string | undefined;
};

const QuillWrapper = ({ theme, onChange, placeholder }: Props) => {
  return (
    <QuillLoader theme={theme} onChange={onChange} placeholder={placeholder} />
  );
};

QuillWrapper.defaultProps = {
  theme: "snow",
  placeholder: "",
};

export default QuillWrapper;
