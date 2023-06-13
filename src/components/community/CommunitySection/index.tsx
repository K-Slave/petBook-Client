import React from "react";
import { CommunitySectionBox } from "./styled";

interface Props {
  title: string;
  sideElement?: React.ReactNode;
}

const CommunitySection = ({
  title,
  children,
  sideElement,
}: React.PropsWithChildren<Props>) => {
  return (
    <CommunitySectionBox>
      <div className="heading">
        <h3>{title}</h3>
        {sideElement}
      </div>
      {children}
    </CommunitySectionBox>
  );
};

CommunitySection.defaultProps = {
  sideElement: null,
};

export default CommunitySection;
