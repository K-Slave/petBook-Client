import LinkedArticle from "../DOMStructure/PaperBox";
import {
  KnowhowPaperWrap,
  KnowhowPaperTop,
  KnowhowPaperMain,
  UserProfileTag,
} from "../Design/Desktop/KnowhowPaperBoxStyle";

const KnowhowPaperBox = () => {
  const sample_timeline = "1일전";
  const sample_contents =
    "질문이 들어갑니다 질문이 들어갑니다 질문이 들어갑니다";

  const sample_users = "유저프로필";
  const sample_pages = "/knowhow";

  return (
    <LinkedArticle
      InputWrap={<KnowhowPaperWrap />}
      InputTop={<KnowhowPaperTop />}
      InputMain={<KnowhowPaperMain />}
      InputBottom={<UserProfileTag />}
      to={sample_pages}
      topValue={sample_timeline}
      mainValue={sample_contents}
      bottomValue={sample_users}
    />
  );
};

export default KnowhowPaperBox;
