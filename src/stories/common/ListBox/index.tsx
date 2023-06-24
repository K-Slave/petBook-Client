import type { PropsWithChildren } from "react";
import { ListDiv } from "./style";

export interface ListBoxProps {
  width?: string;
  maxHeight?: string;
  color?: string;
  bgColor?: string;
  border?: {
    color?: string;
    radius?: string;
  };
  boxShadow?: string;
  style?: React.CSSProperties;
}

const ListBox = (props: PropsWithChildren<ListBoxProps>) => {
  return <ListDiv {...props}>{props.children}</ListDiv>;
};

ListBox.defaultProps = {
  width: "100%",
  color: "var(--black_02)",
  bgColor: "white",
  boxShadow: "0px 8px 12px rgba(50, 26, 9, 0.1)",
  border: {
    color: "var(--bg_white_01)",
    radius: "12px",
  },
};

export default ListBox;
