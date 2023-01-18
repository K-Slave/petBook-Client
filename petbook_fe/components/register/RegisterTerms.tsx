import { useState } from "react";
import { Modal } from "@components/common/Modal/Modal";

// styled
import { Terms } from "./styled/styledRegisterForm";

const TermsWrap = () => {
  const [agree, setAgree] = useState([false, false]);
  const [modal, setModal] = useState({
    state: false,
    data: {
      content: "",
      title: "",
    },
  });

  const handleCloseModal = () => {
    setModal((modalState) => ({ ...modalState, state: false }));
  };

  const HandlerOpen = (title: string) => {
    let titleName = "";
    let contentText = "";
    let active = false;

    switch (title) {
      case "terms": {
        if (agree[0] === false) {
          titleName = "이용약관";
          contentText = "약관 내용";
          active = true;
        }
        setAgree((el) => [active, el[1]]);
        break;
      }
      case "privacy": {
        if (agree[1] === false) {
          titleName = "개인정보 수집 및 이용약관";
          contentText = "개인정보 수집 및 이용약관 내용";
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
        content: contentText,
      },
    }));
  };

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

  return (
    <Terms>
      <Modal modalState={modal} handleCloseModal={handleCloseModal}>
        <hgroup>
          <h2>{modal.data.title}</h2>
        </hgroup>
        <section>
          <p>{modal.data.content}</p>
        </section>
      </Modal>
      {agreeContent.map((agreeEl) => {
        return (
          <li>
            <button type="button">
              <label htmlFor={agreeEl.id}>
                <input
                  key={agreeEl.id}
                  onChange={() => HandlerOpen(agreeEl.id)}
                  checked={agree[agreeEl.index]}
                  type="checkbox"
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
