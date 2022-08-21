import LinkedArticle from "../DOMStructure/PaperBox";
import {
  QALinkedArticleWrap,
  QALinkedAricleTop,
  QALinkedAricleTopMain,
  UserProfileTag,
} from "../Design/Desktop/KnowhowPaperBoxStyle";

const QALinkedArticle = () => {
  const sample_timeline = "1일전";
  const sample_contents =
    "질문이 들어갑니다 질문이 들어갑니다 질문이 들어갑니다";

  const sample_users = "유저프로필";
  const sample_pages = "/knowhow";

  return (
    <LinkedArticle
      InputWrap={<QALinkedArticleWrap />}
      InputTop={<QALinkedAricleTop />}
      InputMain={<QALinkedAricleTopMain />}
      InputBottom={<UserProfileTag />}
      to={sample_pages}
      topValue={sample_timeline}
      mainValue={sample_contents}
      bottomValue={sample_users}
    />
  );
};

export default QALinkedArticle;
