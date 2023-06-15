import { useRouter } from "next/router";
import React from "react";
import Button from "@/stories/common/Button";
import { ChevronLeftThin } from "@/stories/Icon/ChevronLeft";

export type Position = "start" | "end";

const BackButton = ({ position }: { position: Position }) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <Button
      variant="tertiary"
      color="var(--black_02)"
      width="220px"
      onClick={onClick}
      style={{
        gap: "6px",
        alignSelf: position === "start" ? "flex-start" : "flex-end",
      }}
    >
      <ChevronLeftThin width="24" />
      <span>전체 게시물로 돌아가기</span>
    </Button>
  );
};

export default React.memo(BackButton);
