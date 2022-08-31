import styled from "styled-components";

interface DetailCommonInfoProps {
  avatar: string;
  username: string;
  date: string;
}
const DetailCommonInfo = ({
  avatar,
  username,
  date,
}: DetailCommonInfoProps) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="user avatar" />
      <p className="username">{username}</p>
      <p className="date">{date}</p>
    </Wrapper>
  );
};

export default DetailCommonInfo;

const Avatar = styled.img`
  background-color: lightgray;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
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
