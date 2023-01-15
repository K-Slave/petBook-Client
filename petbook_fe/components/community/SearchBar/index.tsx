import SearchIcon from "@components/common/icon/SearchIcon";
import useSearchText from "@lib/hooks/article/useSearchText";
import React, { KeyboardEventHandler, useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import navigator from "@lib/modules/navigator";
import { Bar, Input } from "./styled";

const SearchBar = () => {
  const searchText = useSearchText();
  const [text, setText] = useState(searchText);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const searchArticleList: KeyboardEventHandler = (e) => {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === 13) {
      navigator(`/community/list?query=${text}`, undefined, {
        shallow: true,
      });
    }
  };
  return (
    <Bar onKeyUp={searchArticleList}>
      <Input
        type="text"
        placeholder="관심있는 내용을 검색해보세요!"
        value={text}
        onChange={onChange}
      />
      {searchText ? <RiCloseCircleFill /> : <SearchIcon />}
    </Bar>
  );
};

export default SearchBar;
