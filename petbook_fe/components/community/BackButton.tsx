import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

type Position = "start" | "end";

const BackButton = ({ position } :{ position: Position}) => {
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

const Button = styled.button<{ position: Position}>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 220px;
    height: 52px;
    border-radius: 8px;
    font-size: 16px;
    background-color: #fff;
    color: var(--black_02);
    align-self: ${({ position }) => (position === "start" ? "flex-start" : "flex-end")};
`;

const ChevronLeft = styled.span`
    width: 24px;
    height: 24px;
    background: url("/img/common/chevron_left.svg") no-repeat center center;
`;

export default React.memo(BackButton);
