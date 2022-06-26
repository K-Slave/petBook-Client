import styled from "styled-components";

const RestaurantCardBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.667vw;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: fit-content;
  height: fit-content;

  margin-bottom: 1.3889vw;

  .${(props: RestaurantCardProps) => props.cardname}Rest__Card__Content {
    width: 44.444vw;
    height: 44.444vw;

    background-image: url(${(props: RestaurantCardProps) => props.image});
    background-size: cover;

    border-radius: 8px;
  }

  .${(props: RestaurantCardProps) => props.cardname}Card__Bottom__Title {
    font-size: 4.444vw;
    font-weight: 500;
    letter-spacing: -0.222vw;
    color: #202020;
  }
`;

type RestaurantCardProps = {
  cardname: string;
  placename: string;
  reviewScore: number;
  image: string;
};

export default function RestaurantCard(props: RestaurantCardProps) {
  const { cardname, placename, reviewScore, image } = props;

  return (
    <RestaurantCardBox {...props}>
      <div className={cardname + "Rest__Card__Content"} />
      <h3 className={cardname + "Card__Bottom__Title"}>{placename}</h3>
    </RestaurantCardBox>
  );
}
