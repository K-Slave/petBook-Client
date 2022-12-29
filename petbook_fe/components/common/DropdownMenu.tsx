import useClickOutside from "@lib/hooks/common/useClickOutside";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

const DropdownMenu = ({ MenuList }: { MenuList: React.ReactNode }) => {
    const [show, setShow] = useState(false);
    const onToggle = () => setShow((state) => !state);
    const onClose = () => setShow(false);
    const ref = useRef<HTMLDivElement | null>(null);
    useClickOutside(ref, onClose);
    return (
        <MenuBox ref={ref}>
            <MenuIcon type="button" onClick={onToggle} />
            {show && MenuList}
        </MenuBox>
    );
};

const MenuBox = styled.div`
    position: relative;
    width: 24px;
    height: 24px;
`;

const MenuIcon = styled.button`
    width: 100%;
    height: 100%;
    background: url("/img/common/menu_dot.svg") no-repeat center center;
`;

export const menuListStyle = css`
    position: absolute;
    top: 24px;
    right: 0;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 0 16px 20px;
    background-color: white;
    border: 1px solid var(--bg_white_01);
    box-shadow: 0px 8px 12px rgba(50, 26, 9, 0.1); border-radius: 12px;
`;

export default DropdownMenu;
