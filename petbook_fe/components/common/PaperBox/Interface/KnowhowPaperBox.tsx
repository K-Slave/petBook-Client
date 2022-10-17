import LinkedArticle from "../DOMStructure/PaperBox";
import {
  KnowhowPaperWrap,
  KnowhowPaperTop,
  KnowhowPaperMain,
  UserProfileTag,
} from "../Design/Desktop/KnowhowPaperBoxStyle";
import palette from "../../../../lib/modules/palette";
import localConsole from "../../../../lib/utils/localConsole";

type KnowhowPaperBox = {
  timeline: string;
  contents: string;
  user: string;
  to: string;
};

const KnowhowPaperBox = ({ timeline, contents, user, to }: KnowhowPaperBox) => {
  // 추후에는 게시물에 랜덤한 색을 부여해서 고정되도록 구현해야함.
  const colorIdx = Math.floor(palette.paperBox.length * Math.random());

  const sample_color = `${palette.paperBox[colorIdx]}`;

  return (
    <LinkedArticle
      InputWrap={<KnowhowPaperWrap color={sample_color} />}
      InputTop={<KnowhowPaperTop />}
      InputMain={<KnowhowPaperMain />}
      InputBottom={<UserProfileTag />}
      to={to}
      topValue={timeline}
      mainValue={contents}
      bottomValue={user}
    />
  );
};

export default KnowhowPaperBox;
