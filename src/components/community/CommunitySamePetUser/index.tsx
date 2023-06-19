import React from "react";
import CommunitySamePetUserBox from "./styled";

interface Props {
  title: string;
}

const CommunitySamePetUser = ({
  title,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <CommunitySamePetUserBox>
      <div className="Same_User_Wrap">
        <h3>{title}</h3>
        <div className="Same_User_Box">{children}</div>
      </div>
      <div className="Banner_Wrap">
        <div className="Banner_Box">
          <h3>지금은 디자인이 들어가지만 나중에는 광고가 최대28자</h3>
          <p className="Banner_Text">상세한 내용 역시 최대 한줄이 들어갑니다</p>
          <span className="Banner_Text">공백 포함 최대 45자입니다</span>
        </div>
      </div>
    </CommunitySamePetUserBox>
  );
};

export default CommunitySamePetUser;
