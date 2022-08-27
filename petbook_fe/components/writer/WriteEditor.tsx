import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const WriteEditor = () => {
  const [value, setValue] = useState("");

  return <QuillWrapper theme='snow' value={value} onChange={setValue} />;
};

export default WriteEditor;
