import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { registerFormState } from "@atoms/pageAtoms/login/userState";
import { Terms } from "./styled/styledRegisterForm";
import Modal from "@/stories/common/Modal";
import TermsInfo from "./info/Terms";
import useModal from "@lib/hooks/common/useModal";
import Typography from "@/stories/common/Typography";
import Button from "@/stories/common/Button";

const TermsWrap = () => {
  const { openModal, closeModal } = useModal();
  const registerForm = useSetRecoilState(registerFormState);
  const [agree, setAgree] = useState([false, false]);
  const agreeContent = [
    {
      id: "terms",
      index: 0,
      text: "펫북 이용 약관에 동의합니다 [필수]",
    },
    {
      id: "privacy",
      index: 1,
      text: "개인정보 수집 및 이용에 동의합니다 [필수]",
    },
  ];

  const HandlerOpen = (title: string) => {
    let titleName = "";
    let contentKey = "";

    switch (title) {
      case "terms": {
        titleName = "이용약관";
        contentKey = "terms";
        setAgree((el) => [true, el[1]]);
        break;
      }
      case "privacy": {
        titleName = "개인정보 수집 및 이용약관";
        contentKey = "privacy";
        setAgree((el) => [el[0], true]);
        break;
      }
      default: {
        break;
      }
    }

    openModal(Modal, {
      closeModal,
      children: (
        <Modal.DefaultContentBox>
          <Typography variant="h3-bold" tag="h1">
            {titleName}
          </Typography>
          <TermsInfo content={contentKey} />
          <Modal.DefaultButtonBox buttonNum={1} style={{ marginTop: "2rem" }}>
            <Button variant="primary" onClick={closeModal}>
              확인
            </Button>
          </Modal.DefaultButtonBox>
        </Modal.DefaultContentBox>
      ),
    });
  };

  useEffect(() => {
    const everyTrue = agree.every((el) => el === true);
    registerForm((el) => ({ ...el, agree: everyTrue === true ? "true" : "" }));
  }, [agree]);

  return (
    <Terms>
      {agreeContent.map((agreeEl) => {
        return (
          <li key={agreeEl.id}>
            <button type="button">
              <label htmlFor={agreeEl.id}>
                <input
                  key={agreeEl.id}
                  onChange={() => HandlerOpen(agreeEl.id)}
                  checked={agree[agreeEl.index]}
                  type="checkbox"
                  className="default"
                  id={agreeEl.id}
                />
                <p>{agreeEl.text}</p>
              </label>
            </button>
          </li>
        );
      })}
    </Terms>
  );
};

export default TermsWrap;
