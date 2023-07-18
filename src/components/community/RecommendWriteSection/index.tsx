import React from "react";
import RecommendSectionBox from "./styled";

interface Props {
  title: string;
}

const RecommendWriteSection = ({
  title,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <RecommendSectionBox>
      <div className="heading">
        <h3>{title}</h3>
      </div>
      {children}
    </RecommendSectionBox>
  );
};

export default RecommendWriteSection;
