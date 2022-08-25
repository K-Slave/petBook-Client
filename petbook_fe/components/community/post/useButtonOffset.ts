import { useEffect, useState } from "react";

export const useButtonOffset = (btnNum: number, currentPage: number) => {
  const [offset, setOffset] = useState(1);
  useEffect(() => {
    if (currentPage >= offset + btnNum) {
      setOffset((offset) => offset + btnNum);
    } else if (currentPage < offset) {
      setOffset((offset) => offset - btnNum);
    }
  }, [currentPage]);
  return offset;
};
