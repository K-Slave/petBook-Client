import React from "react";
import RecommendSection from "./style";

interface Props {
  title: string;
}

const RecommendWriteSection = ({
  title,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <RecommendSection>
      <div className="Header_Title">
        <h3>{title}</h3>
      </div>
      {children}
    </RecommendSection>
  );
};

export default RecommendWriteSection;
