import { Button } from "../Button/Button";
import Countour from "../Countour";
import AVG_SCORE from "../../../assets/img/best_average_score.png";
import HEART from "../../../assets/img/heart.png";
import { RestaurantCardProps } from "./RestaurantCard";
import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const CardInfoStyle = css`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Name {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.9px;
  }

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Place__Class {
    display: flex;
    align-items: center;

    margin: 10px 0;

    font-size: 15px;
    letter-spacing: -0.75px;
  }

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Place {
    padding-bottom: 1.5px;
  }

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Class {
    padding-bottom: 1.5px;
    color: #dadada;
  }

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Content__Box {
    display: flex;
    justify-content: flex-start;

    margin-bottom: 13px;

    font-size: 14px;
    letter-spacing: -0.98px;
  }

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;

    width: 100%;
    height: 38px;
  }

  .Content__lastWord {
    display: flex;
    align-items: flex-end;
  }

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Score {
    display: flex;
    justify-content: flex-start;

    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.7px;
  }

  .Score__Normal__Text {
    margin-right: 8px;
  }

  .Score__Highlight__Text {
    font-weight: bold;
    color: #0ac7ce;
  }

  .Score__Recommend {
    display: flex;
    align-items: center;

    margin-right: 7px;
    .Score__Recommend__Image {
      width: 12.7px;
      height: 11.8px;

      margin: 2px 4.2px 0 0;
    }
  }

  .Score__Like__Button {
    display: flex;
    align-items: center;

    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.7px;

    .Score__Like__Button__Image {
      width: 12px;
      height: 10.6px;

      margin: 2px 3.4px 0 0;
    }
  }
`;

const RestaurantCardInfoBox = styled.div`
  ${CardInfoStyle}

  cursor: ${(props: RestaurantCardProps) =>
    props.isClick ? "grabbing" : "auto"};
`;

export default function RestaurantCardInfo(
  props: PropsWithChildren<RestaurantCardProps>
) {
  const { cardName, placeName, children, isClick } = props;

  return (
    <RestaurantCardInfoBox
      className={cardName + "Restaurant__Info__Box"}
      {...props}
    >
      <span className={cardName + "Restaurant__Name"}>{placeName}</span>
      <p className={cardName + "Restaurant__Place__Class"}>
        <span className={cardName + "Restaurant__Place"}>청담</span>
        <Countour />
        <span className={cardName + "Restaurant__Class"}>알리오올리오</span>
      </p>

      <div className={cardName + "Restaurant__Content__Box"}>
        <p className={cardName + "Restaurant__Content"}>
          <span>"</span>우연히 방문했지만 기대이상으로 맛있었습니다. 친절하고
          깔끔해서 앞으로도 방문하고 싶을것 같아요 블라블라 글자 제한 테스트
          중입니다 입니다
        </p>
        <span className='Content__lastWord'>"</span>
      </div>

      <p className={cardName + "Restaurant__Score"}>
        <span className='Score__Normal__Text'>
          <span className='Score__Highlight__Text'>80</span>점
        </span>
        <span className='Score__Recommend'>
          <img
            className='Score__Recommend__Image'
            src={`${AVG_SCORE}`}
            alt=''
          />
          4.8 (332명)
        </span>
        <Button className='Score__Like__Button' fontColor={"#fff"}>
          <img
            className='Score__Like__Button__Image'
            src={`${HEART}`}
            alt=''
          ></img>
          2832
        </Button>
      </p>
    </RestaurantCardInfoBox>
  );
}
