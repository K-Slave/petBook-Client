import useClickOutside from "@lib/hooks/common/useClickOutside";
import React, { MouseEventHandler, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  menuList: {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }[];
}

const DropdownMenu = ({ menuList }: Props) => {
  const [show, setShow] = useState(false);
  const onToggle = () => setShow((state) => !state);
  const onClose = () => setShow(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, onClose);
  return (
    <MenuBox ref={ref}>
      <MenuIcon type="button" onClick={onToggle} />
      {show && (
        <MenuList>
          {menuList.map(({ name, onClick }) => (
            <button type="button" onClick={onClick} key={name}>
              {name}
            </button>
          ))}
        </MenuList>
      )}
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

const MenuList = styled.div`
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
  box-shadow: 0px 8px 12px rgba(50, 26, 9, 0.1);
  border-radius: 12px;
  button {
    width: 100%;
    text-align: left;
  }
`;

export default DropdownMenu;
