import styled from "styled-components";
import ReadMoreButton from "../Button/ReadMoreButton";
import Responsive from "../Responsive";
import CardListSlide from "./CardListSlide";

const CardListSectionBox = styled.section`
  width: 100%;
  height: 165vw;

  background-color: #fff;
`;

const CardSectionWrap = styled(Responsive)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0;

  padding-top: 6.667vw;
  padding-bottom: 6.667vw;

  .${(props: any) => props.cardname}Card__Section__Bottom {
    display: flex;
    justify-content: center;

    margin-top: 5.556vw;
  }
`;

type CardListSectionProps = {
  cardname?: string;
  toficList: string[];
  placeNameList: string[][];
  reviewScoreList: number[];
  imgList: string[];
};

export default function CardListSection(props: CardListSectionProps) {
  const {
    cardname = "",
    toficList,
    placeNameList,
    reviewScoreList,
    imgList,
  } = props;

  return (
    <CardListSectionBox className='Card__List__Section'>
      <CardSectionWrap className='Card__Section__Wrap' {...props}>
        <div className={cardname + "Card__Section__Top"}>
          <h3 className={cardname + "Card__Section__Title"}>
            회원님만을 위해 준비했어요
          </h3>
        </div>
        <CardListSlide {...props} />
        <div className={cardname + "Card__Section__Bottom"}>
          <ReadMoreButton />
        </div>
      </CardSectionWrap>
    </CardListSectionBox>
  );
}
