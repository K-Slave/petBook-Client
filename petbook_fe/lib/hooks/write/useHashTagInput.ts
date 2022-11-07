import writeState from "@atoms/pageAtoms/community/writeState";
import { replaceHash } from "@lib/modules/replaceHash";
import { useSetRecoilState } from "recoil";

const useHashTagInput = (
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const setWrite = useSetRecoilState(writeState);
  const setHashTag = (keyDownEvent: React.KeyboardEvent<HTMLInputElement>) => {
    setWrite((write) => {
      // 중복 필터링
      if (
        write.inputHash.find(
          (hashTag) => hashTag === replaceHash(keyDownEvent.currentTarget.value)
        )
      ) {
        setIsError(true);

        return {
          ...write,
        };
      }

      // 5개 제한
      if (write.inputHash.length >= 5) {
        setIsError(true);
        return {
          ...write,
        };
      }

      // 15글자 제한
      if (keyDownEvent.currentTarget.value.length > 15) {
        setIsError(true);
        return {
          ...write,
        };
      }

      return {
        ...write,
        inputHash: [
          ...write.inputHash,
          replaceHash(keyDownEvent.currentTarget.value),
        ],
      };
    });
  };

  return setHashTag;
};

export default useHashTagInput;
