import writeState from "@atoms/pageAtoms/community/writeState";
import { itrRemove } from "@lib/utils/iterableFunctions";
import { setterError } from "@lib/utils/recoilSetterHandler";
import replaceAll from "@lib/utils/replaceAll";
import React from "react";
import { useSetRecoilState } from "recoil";

// TODO : setWrite 안에 있어 가독성이 떨어지는 코드들 리팩터링
const useSetHashTag = (
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // const [inputHash, setWrite] = useSelectorState(writeState, {
  //   inputHash: "",
  // });

  const setWrite = useSetRecoilState(writeState);

  let removeTag: (textValue: string) => void;
  let setTags: (textValue: string) => void = () => undefined;

  removeTag = (textValue: string) => {
    setWrite((write) => {
      return {
        ...write,
        inputHash: itrRemove((tag) => tag !== textValue, write.inputHash),
      };
    });
  };

  if (setIsError) {
    setTags = (textValue: string) => {
      setWrite((write) => {
        const addTag = textValue.includes("#")
          ? (replaceAll(textValue, "#", true) as string)
          : textValue;

        // 중복 필터링
        // 5개 제한
        // 15글자 제한

        if (
          write.inputHash.find(
            (hashTag) => hashTag === replaceAll(textValue, "#", true)
          ) ||
          write.inputHash.length >= 5 ||
          textValue.length > 15
        ) {
          setterError(write, setIsError);
        }

        return {
          ...write,
          inputHash: [...write.inputHash, addTag],
        };
      });
    };
  }

  return { removeTag, setTags };
};

export default useSetHashTag;
