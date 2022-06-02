import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import CardListSlide from "./CardListSlide";

export const CardListSectionStyle = css`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 261px;

  margin-top: 10px;

  .${(props: CardListSectionType) => props.cardName}Section__Title {
    position: absolute;
    top: -7px;

    font-size: 22px;
    font-weight: bold;
    letter-spacing: -1.1px;
    color: #202020;
  }

  .${(props: CardListSectionType) => props.cardName}Section__User {
    background: linear-gradient(to bottom, #fff 55%, #0ac7ce 45%);

    font-weight: bold;
  }
`;

const CardListSectionBox = styled.section`
  ${CardListSectionStyle}
`;

export type CardListSectionType = {
  cardName: string;
  username?: string;
  image: string;
  placeNameList: string[];
  sectionTitle: string;
};

export default function CardListSection(
  props: PropsWithChildren<CardListSectionType>
) {
  const { cardName, username, image, placeNameList, sectionTitle, children } =
    props;
  return (
    <CardListSectionBox className={cardName + "List__Section__Box"} {...props}>
      {children ? (
        children
      ) : (
        <>
          <h1 className={cardName + "Section__Title"}>
            <span className={cardName + "Section__User"}>{username}</span>
            {sectionTitle}
          </h1>
          <CardListSlide {...props} />
        </>
      )}
    </CardListSectionBox>
  );
}
