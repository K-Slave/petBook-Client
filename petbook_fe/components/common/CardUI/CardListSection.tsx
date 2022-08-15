import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import useResource from "../../../hooks/useResource";
import localConsole from "../../../lib/localConsole";
import { data2Resource } from "../../../pages/findfriend";
import CardListSlide from "./CardListSlide";

export const CardListSectionStyle = css`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: calc(100vw);
  height: calc(15.5rem + 2.625rem + 3.1875rem);

  padding: 0 1rem;

  .${(props: CardListSectionType) => props.cardname}Section__Title {
    display: flex;
    justify-content: center;

    width: 100%;

    font-size: 22px;
    font-weight: bold;
    letter-spacing: -1.1px;
    color: #202020;
  }

  .${(props: CardListSectionType) => props.cardname}Section__User {
    background: linear-gradient(to bottom, #fff 55%, #0ac7ce 45%);

    font-weight: bold;
  }
`;

const CardListSectionBox = styled.section`
  ${CardListSectionStyle}
`;

export type CardListSectionType = {
  className?: string;
  cardname: string;
  username?: string;
  image?: string;
  placeNameList?: string[];
  userNameList: string[];
  userAgeList: number[];
  sectionTitle?: string;
};

export default function CardListSection(
  props: PropsWithChildren<CardListSectionType>
) {
  const { cardname, username, image, placeNameList, sectionTitle, children } =
    props;

  const { data } = useResource(data2Resource);

  localConsole.log(data, "data");

  return (
    <CardListSectionBox className={cardname + "List__Section__Box"} {...props}>
      <>
        <h1 className={cardname + "Section__Title"}>{sectionTitle}</h1>
        <span> useResource test : </span>
        <CardListSlide {...props} />
      </>
    </CardListSectionBox>
  );
}
