import { useRouter } from "next/router";
import React from "react";
import { Button, ChevronLeft } from "./styled";

export type Position = "start" | "end";

const BackButton = ({ position }: { position: Position }) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <Button type="button" onClick={onClick} position={position}>
      <ChevronLeft />
      <span>전체 게시물로 돌아가기</span>
    </Button>
  );
};

export default React.memo(BackButton);
