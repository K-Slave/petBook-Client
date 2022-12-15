import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const DropdownMenu = ({ MenuList }: { MenuList: React.ReactNode }) => {
    const [show, setShow] = useState(false);
    const onToggle = () => setShow((state) => !state);
    const onClose = () => setShow(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            onClose();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
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
    width: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    background-color: white;
    border: 1px solid var(--bg_white_01);
    border-radius: 5px;
`;

export default DropdownMenu;
