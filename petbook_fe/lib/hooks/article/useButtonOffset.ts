import { useEffect, useState } from "react";

export default function useButtonOffset({
  btnNum,
  currentPage,
}: {
  btnNum: number;
  currentPage: number;
}) {
  const [offset, setOffset] = useState(1);
  useEffect(() => {
    if (currentPage >= offset + btnNum) {
      setOffset((oldOffset) => oldOffset + btnNum);
    } else if (currentPage < offset) {
      setOffset((oldOffset) => oldOffset - btnNum);
    }
  }, [currentPage]);
  return offset;
}
