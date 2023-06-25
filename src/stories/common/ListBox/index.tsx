import { Fragment } from "react";
import { ListDiv } from "./style";

export interface ListBoxStyleProps {
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

export interface ListBoxProps<T> extends ListBoxStyleProps {
  list: T[];
  renderItem: (item: T) => React.ReactNode;
  EmptyGuide?: React.ReactNode;
}

export type ListItem = { id: number } & { [key: string]: any };

const ListBox = <T extends ListItem>({
  list,
  renderItem,
  EmptyGuide,
  ...props
}: ListBoxProps<T>) => {
  return (
    <ListDiv {...props}>
      {list.map((item) => (
        <Fragment key={item.id}>{renderItem(item)}</Fragment>
      ))}
      {list.length === 0 && EmptyGuide}
    </ListDiv>
  );
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
  EmptyGuide: null,
};

export default ListBox;
