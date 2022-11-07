import writeState from "@atoms/pageAtoms/community/writeState";
import React from "react";
import { useSetRecoilState } from "recoil";

const useHashTagClear = () => {
  const setWrite = useSetRecoilState(writeState);
  const setter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setWrite((write) => {
      const textValue = e.currentTarget.textContent?.replace("# ", "");

      const filteredTags = write.inputHash.filter((tag) => tag !== textValue);

      return {
        ...write,
        inputHash: filteredTags,
      };
    });
  };

  return setter;
};

export default useHashTagClear;
