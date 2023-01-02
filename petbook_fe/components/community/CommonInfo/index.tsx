import getTimeForToday from "@lib/utils/getTimeForToday";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  avatar?: string;
  username: string;
  year: number;
  date: string;
  className?: string;
}

const CommonInfo = ({ avatar, username, year, date, className }: Props) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(getTimeForToday(date));
  }, [date]);
  return (
    <Wrapper>
      {avatar && <Avatar src={avatar} alt="user avatar" />}
      <div className={className}>
        <div className="row">
          <span className="username">{username}</span>
          <span className="year">{year}년차</span>
        </div>
        <span className="date">{time}</span>
      </div>
    </Wrapper>
  );
};

CommonInfo.defaultProps = {
  avatar: "",
  className: "",
};

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  background-color: lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  .username {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--black_02);
  }
  .date {
    font-size: 14px;
    line-height: 24px;
    color: var(--black_05);
  }
  .year {
    padding: 3px 10px;
    background-color: var(--black_07);
    border-radius: 100px;
    color: var(--black_02);
    font-size: 10px;
    font-weight: 500;
  }
`;

export default CommonInfo;
