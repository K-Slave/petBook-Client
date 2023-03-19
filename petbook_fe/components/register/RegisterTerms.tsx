import { useEffect, useState } from "react";
import { Modal } from "@components/common/modal/Modal";

import { useSetRecoilState } from "recoil";
import { registerFormState } from "@atoms/pageAtoms/login/userState";

import { Terms } from "./styled/styledRegisterForm";
import TermsInfo from "./info/Terms";

const TermsWrap = () => {
  const registerForm = useSetRecoilState(registerFormState);
  const [agree, setAgree] = useState([false, false]);
  const [modal, setModal] = useState({
    state: false,
    data: {
      content: "",
      title: "",
    },
  });

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

  const handleCloseModal = () => {
    setModal((modalState) => ({ ...modalState, state: false }));
  };

  const HandlerOpen = (title: string) => {
    let titleName = "";
    let contentKey = "";
    let active = false;

    switch (title) {
      case "terms": {
        if (agree[0] === false) {
          titleName = "이용약관";
          contentKey = "terms";
          active = true;
        }
        setAgree((el) => [active, el[1]]);
        break;
      }
      case "privacy": {
        if (agree[1] === false) {
          titleName = "개인정보 수집 및 이용약관";
          contentKey = "privacy";
          active = true;
        }
        setAgree((el) => [el[0], active]);
        break;
      }
      default: {
        break;
      }
    }

    setModal((modalState) => ({
      ...modalState,
      state: active,
      data: {
        title: titleName,
        content: contentKey,
      },
    }));
  };

  useEffect(() => {
    const everyTrue = agree.every((el) => el === true);
    registerForm((el) => ({ ...el, agree: everyTrue === true ? "true" : "" }));
  }, [agree]);

  return (
    <Terms>
      <Modal modalState={modal} handleCloseModal={handleCloseModal}>
        <hgroup>
          <h2>{modal.data.title}</h2>
        </hgroup>

        <TermsInfo content={modal.data.content} />
      </Modal>
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
