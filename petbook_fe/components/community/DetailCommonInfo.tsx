import styled from "styled-components";

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  .username {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
  .date {
    margin-top: 1px;

    font-size: 14px;
    color: #777777;
  }
`;

interface Props {
  avatar?: string;
  username: string;
  date: string;
}

const DetailCommonInfo = ({ avatar, username, date }: Props) => {
  return (
    <Wrapper>
      {avatar ? <Avatar src={avatar} alt="user avatar" /> : <Circle />}
      <p className="username">{username}</p>
      <p className="date">{date}</p>
    </Wrapper>
  );
};

export default DetailCommonInfo;

DetailCommonInfo.defaultProps = {
  avatar: "",
};
