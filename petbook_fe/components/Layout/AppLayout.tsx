import React from "react";
import TopNav from "../TopNav";

const AppLayout = (props: { childern: React.ReactNode }) => {
  console.log(props.childern);
  return (
    <div>
      <TopNav />
      <body>{props.childern}</body>
    </div>
  );
};
export default AppLayout;
