import { MouseEventHandler, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import writeState from "../../atoms/componentAtoms/community/writeState";
import { useSetResource } from "../../hooks/useResource";
import localConsole from "../../lib/localConsole";
import { board_create } from "../../pages/community/write";
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

  const reqBody = {
    title: input.inputTitle,
    content: input.inputContent,
    category_id: 2,
    reg_user: "윤성연",
    visible_status: "Y",
  };

  const { data, isLoading, isError, isSuccess, mutate } = useSetResource({
    key: board_create.key,
    requester: board_create.requester(reqBody),
  });

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

    mutate();
  }, [input]);

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
