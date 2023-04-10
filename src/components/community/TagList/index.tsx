import getRandomKey from "@lib/utils/getRandomKey";
import { TagListUl, TagListLi } from "./styled";

interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => {
  return (
    <TagListUl>
      {tags.map((tag) => (
        <TagListLi key={getRandomKey()}>{tag}</TagListLi>
      ))}
    </TagListUl>
  );
};

export default TagList;
