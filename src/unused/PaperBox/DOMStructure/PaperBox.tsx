import LinkedArticle from "../Core/LinkedArticle";

type PaperBoxProps = {
  InputWrap: JSX.Element;
  InputTop: JSX.Element;
  InputMain: JSX.Element;
  InputBottom: JSX.Element;

  to: string;
  topValue: string;
  mainValue: string;
  bottomValue: string;
};

const PaperBox = ({
  InputWrap,
  InputTop,
  InputMain,
  InputBottom,

  to,
  topValue,
  mainValue,
  bottomValue,
}: PaperBoxProps) => {
  return (
    <LinkedArticle>
      <LinkedArticle.Wrap as={InputWrap} to={to}>
        <LinkedArticle.Top as={InputTop} value={topValue} />
        <LinkedArticle.Main as={InputMain} value={mainValue} />
        <LinkedArticle.Bottom as={InputBottom} value={bottomValue} />
      </LinkedArticle.Wrap>
    </LinkedArticle>
  );
};

export default PaperBox;
