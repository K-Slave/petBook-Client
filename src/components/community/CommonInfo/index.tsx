import { useEffect, useState } from "react";
import getTimeForToday from "@lib/utils/getTimeForToday";
import { Avatar, Wrapper, Div } from "./styled";

interface Props {
  avatar?: string;
  username: string;
  year: number;
  date: string;
}

const CommonInfo = ({ avatar, username, year, date }: Props) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    setTime(getTimeForToday(date));
  }, [date]);
  return (
    <Wrapper>
      {avatar && <Avatar src={avatar} alt="user avatar" />}
      <Div>
        <div className="row">
          <span className="username">{username}</span>
          <span className="year">{year}년차</span>
        </div>
        <span className="date">{time}</span>
      </Div>
    </Wrapper>
  );
};

CommonInfo.defaultProps = {
  avatar: "",
};

export default CommonInfo;
