import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import RestaurantCardInfo from "./RestaurantCardInfo";

export const RestaurantCardStyle = css`
  position: relative;

  overflow: hidden;
  user-select: none;
  -ms-user-select: none;

  display: flex;
  align-items: flex-end;

  width: 160px;
  height: 160px;

  transition: all 0.3s ease-in-out;

  background-image: url(${(props: any) => (props.image ? props.image : "")});
  background-size: cover;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.7px;
  color: #fff;

  .${(props: RestaurantCardProps) => props.cardName}Restaurant__Card__Info {
    overflow: hidden;

    position: relative;

    transition: all 0.3s ease-in-out;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 32px;

    padding: 5px 15px 0 15px;
  }

  .${(props: RestaurantCardProps) =>
      props.cardName}Restaurant__Card__Info::after {
    position: absolute;
    bottom: 0;
    left: 0;

    transition: all 0.3s ease-in-out;

    width: 100%;
    height: 32px;

    content: "";

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1) 19%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.9)
    );
  }

  &:hover {
    width: 260px;
    height: 260px;

    .${(props: RestaurantCardProps) =>
        props.cardName}Restaurant__Card__Info::after {
      transition: all 0.3s ease-in-out;

      height: 160px;

      background-color: #000;
      border-radius: 0 30px 0 0;

      opacity: 0.52;
    }

    .${(props: RestaurantCardProps) => props.cardName}Restaurant__Card__Info {
      padding: 11px 15px;

      transition: all 0.3s ease-in-out;

      height: 160px;
    }
  }
`;

const RestaurantCardBox = styled.article`
  ${RestaurantCardStyle}

  cursor: ${(props: RestaurantCardProps) =>
    props.isClick ? "grabbing" : "pointer"};
`;

export type RestaurantCardProps = {
  cardName: string;
  image: string;
  placeName: string;
  isClick?: boolean;
};

const RestaurantCard = (props: PropsWithChildren<RestaurantCardProps>) => {
  const { cardName, placeName, children, isClick } = props;

  return (
    <RestaurantCardBox
      className={cardName + "Restaurant__Card__Box"}
      {...props}
    >
      {children ? (
        children
      ) : (
        <div className={cardName + "Restaurant__Card__Info"}>
          <RestaurantCardInfo {...props} />
        </div>
      )}
    </RestaurantCardBox>
  );
};

export default React.memo(RestaurantCard);
