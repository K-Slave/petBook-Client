import React from "react";
import Header from "./Nav/Interface/Header";
import TopNav from "./Nav/Interface/TopNav";

const CommonHeader = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <div className='Header__Wrap'>
        <Header path={pathname} />
        <TopNav path={pathname} />
      </div>
      <HeaderSpacer />
    </>
  );
};

const HeaderSpacer = React.memo(() => <div className='Header__Spacer' />);

export default CommonHeader;
