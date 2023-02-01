import SearchIcon from "@components/common/icon/Search";
import navigator from "@lib/modules/navigator";
import React, { KeyboardEventHandler, useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import getHrefWithCategory from "@lib/utils/gerHrefWithCategory";
import { useRouter } from "next/router";
import { SearchBarDiv, SearchBarInput } from "./styled";

interface Props {
  placeholder?: string;
  baseUrl: string;
}

const SearchBar = ({ placeholder, baseUrl }: Props) => {
  const router = useRouter();
  const { query } = router.query;
  const searchText = query === undefined ? "" : (query as string);
  const [text, setText] = useState(searchText);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const searchArticleList: KeyboardEventHandler = (e) => {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === 13) {
      navigator({
        url: `${baseUrl[0] !== "/" ? `/${baseUrl}` : baseUrl}?query=${text}`,
        options: {
          shallow: true,
        },
      });
    }
  };
  const clear = () => {
    setText("");
    navigator({
      url: getHrefWithCategory({ id: 0, name: "전체" }),
      options: {
        shallow: true,
      },
    });
  };
  useEffect(() => {
    setText(searchText);
  }, [searchText]);
  return (
    <SearchBarDiv onKeyUp={searchArticleList}>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={onChange}
      />
      {searchText ? <IoCloseCircle onClick={clear} /> : <SearchIcon />}
    </SearchBarDiv>
  );
};

SearchBar.defaultProps = {
  placeholder: "",
};

export default SearchBar;
