import styled from "styled-components";

interface DetailCommonInfoProps {
  avatar?: string;
  username: string;
  date: string;
}

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Circle = styled.div`
  background-color: lightgray;
  width: 40px;
  height: 40px;
  border-radius: 50%;
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
    font-size: 14px;
    color: #777777;
    margin-top: 1px;
  }
`;

const DetailCommonInfo = ({
  avatar,
  username,
  date,
}: DetailCommonInfoProps) => {
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
