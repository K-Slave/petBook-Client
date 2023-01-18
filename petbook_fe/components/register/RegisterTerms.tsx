import { useState } from "react";
import { Modal } from "@components/common/Modal/Modal";

// styled
import { Terms } from "./styled/styledRegisterForm";

const TermsWrap = () => {
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
    switch (title) {
      case "terms": {
        titleName = "이용약관";
        contentText = "약관 내용 // 지금은 임시";
        break;
      }
      case "privacy": {
        titleName = "개인정보 수집 및 이용약관";
        contentText = "개인정보 수집 및 이용약관 내용 // 지금은 임시";
        break;
      }
      default: {
        break;
      }
    }
    setModal((modalState) => ({
      ...modalState,
      state: true,
      data: {
        title: titleName,
        content: contentText,
      },
    }));
  };

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
      <li>
        <button type="button" onClick={() => HandlerOpen("terms")}>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" />
            <p>펫북 이용 약관에 동의합니다 [필수]</p>
          </label>
        </button>
      </li>
      <li>
        <button type="button" onClick={() => HandlerOpen("privacy")}>
          <label htmlFor="privacy">
            <input type="checkbox" id="privacy" />
            <p>개인정보 수집 및 이용에 동의합니다 [필수]</p>
          </label>
        </button>
      </li>
    </Terms>
  );
};
export default TermsWrap;
