import { MouseEventHandler, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { BOARD_CREATE } from "../../pages/community/write";
import writeState from "../../atoms/pageAtoms/community/writeState";
import { useSetResource } from "../../lib/hooks/useResource";
import localConsole from "../../lib/utils/localConsole";
import { Button } from "../common/Button/Button";

const WriteSubmitSection = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: 40px;
  margin-bottom: 40px;
`;

const WriteSubmitButton = styled(Button)`
  width: 320px;
  height: 64px;

  background-color: #ff6e4e;

  border-radius: 8px;

  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  color: #fff;
`;

const WriteSubmit = () => {
  console.log("Submit render");

  const [input, setInput] = useState({ inputTitle: "", inputContent: "" });
  const setWrite = useSetRecoilState(writeState);

  const { data, isLoading, isError, isSuccess, mutate } =
    useSetResource(BOARD_CREATE);

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setWrite((write) => {
      setInput({
        inputTitle: write.inputTitle,
        inputContent: write.inputContent,
      });

      return { ...write, inputTitle: "", inputContent: "" };
    });
  };

  useEffect(() => {
    if (!input.inputTitle || !input.inputContent) return;

    mutate({
      title: input.inputTitle,
      content: input.inputContent,
      category_id: 2,
      reg_user: "윤성연",
      visible_status: "Y",
    });
  }, [input, mutate]);

  localConsole.log(data);
  localConsole.log(isError);
  localConsole.log(isSuccess);
  return (
    <WriteSubmitSection>
      <WriteSubmitButton onClick={onClick}>게시물 등록</WriteSubmitButton>
    </WriteSubmitSection>
  );
};

export default WriteSubmit;
