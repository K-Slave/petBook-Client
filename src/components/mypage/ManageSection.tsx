import AuthWrapper from "@components/common/AuthWrapper/AuthWrapper";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
// import { BubblyTip, useBubblyTip } from "react-bubblytip";

const ManageSection = () => {
  return (
    <ManageSection.Wrap>
      마이페이지 관리 섹션
      {/* <ManageSection.Temp /> */}
    </ManageSection.Wrap>
  );
};

const Wrap = ({ children }: PropsWithChildren<any>) => {
  const { query } = useRouter();
  const idPath = query.id as string;

  return (
    <AuthWrapper userId={idPath}>
      <section>{children}</section>
    </AuthWrapper>
  );
};

// const Temp = () => {
//   const [isView, msgPush] = useBubblyTip();

//   const onClick = () => {
//     msgPush((push) => !push);
//   };

//   return (
//     <div className="Container">
//       <h1>
//         temp
//         <BubblyTip push={isView}>Here is!</BubblyTip>
//       </h1>
//       <button onClick={onClick}>push bubbly</button>
//     </div>
//   );
// };

ManageSection.Wrap = Wrap;
// ManageSection.Temp = Temp;

export default ManageSection;
