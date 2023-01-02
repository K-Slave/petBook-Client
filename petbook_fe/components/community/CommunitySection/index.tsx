import React from "react";
import Link from "next/link";
import styled from "styled-components";

const CommunitySectionBox = styled.section`
  margin-top: 56px;
  color: var(--black_01);
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    h3 {
      font-size: 22px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  button {
    color: var(--black_01);
    font-size: 14px;
  }
`;
interface Props {
  title: string;
  moreHref?: string;
}

const CommunitySection = ({
  title,
  moreHref,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <CommunitySectionBox>
      <div className="heading">
        <h3>{title}</h3>
        {moreHref && (
          <Link href={moreHref} passHref>
            <button type="button">더보기</button>
          </Link>
        )}
      </div>
      {children}
    </CommunitySectionBox>
  );
};

CommunitySection.defaultProps = {
  moreHref: "",
};

export default CommunitySection;