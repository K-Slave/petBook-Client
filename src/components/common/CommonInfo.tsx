import { Wrapper, Avatar } from "@components/community/CommonInfo/styled";
import getTimeForToday from "@lib/utils/getTimeForToday";
import { useEffect, useState } from "react";

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

export default CommonInfo;
