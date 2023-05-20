import SearchIcon from "@components/common/icon/Search";
import navigator from "@lib/modules/navigator";
import React, { KeyboardEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IoCloseCircle } from "react-icons/io5";
import { removeQuery, replaceQuery } from "@lib/modules/queryString";
import { addSearchValue, getRecentSearchList } from "@lib/modules/localStorage";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import OnClickOutside from "../OnClickOutside";
import { SearchBarDiv, SearchBarInput, SearchListUl } from "./styled";

interface Props {
  placeholder?: string;
  keywordBox?: boolean;
}

const QUERY_KEY = "query";
dayjs.extend(utc);
dayjs.extend(timezone);

const SearchBar = ({ placeholder, keywordBox }: Props) => {
  const router = useRouter();
  const target = router.asPath.includes("community") ? "community" : "hospital";
  const { query } = router.query;
  const searchText = query === undefined ? "" : (query as string);
  const [text, setText] = useState(searchText);
  const [showBox, setShowBox] = useState(false);
  const onFocus = () => {
    setShowBox(true);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const search: KeyboardEventHandler = (e) => {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === 13) {
      const url = replaceQuery({
        asPath: router.asPath,
        key: QUERY_KEY,
        query: text,
        basePath: target === "community" ? "/community/list" : undefined,
      });
      addSearchValue({ target, type: "query", value: text });
      navigator({
        url,
        options: {
          shallow: true,
        },
      });
    }
  };
  const clear = () => {
    setText("");
    const url = removeQuery({ asPath: router.asPath, key: QUERY_KEY });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };
  useEffect(() => {
    setText(searchText);
    setShowBox(false);
  }, [searchText]);
  return (
    <OnClickOutside
      trigger={() => {
        setShowBox(false);
      }}
    >
      <SearchBarDiv onKeyUp={search}>
        <SearchBarInput
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={onChange}
          onFocus={onFocus}
        />
        {searchText ? <IoCloseCircle onClick={clear} /> : <SearchIcon />}
        {keywordBox && showBox && (
          <SearchBar.RecentSearchList target={target} />
        )}
      </SearchBarDiv>
    </OnClickOutside>
  );
};

const RecentSearchList = ({ target }: { target: "hospital" | "community" }) => {
  const list = getRecentSearchList(target);
  const router = useRouter();
  const search = (keyword: string) => () => {
    const url = replaceQuery({
      asPath: router.asPath,
      key: QUERY_KEY,
      query: keyword,
    });
    addSearchValue({ target, type: "query", value: keyword });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };
  return list ? (
    <SearchListUl>
      {list
        .sort(
          ({ time: timeA, timezone: tzA }, { time: timeB, timezone: tzB }) => {
            const dateA = dayjs(timeA).tz(tzA);
            const dateB = dayjs(timeB).tz(tzB);
            return dateB.diff(dateA);
          }
        )
        .map((keyword) => (
          <li onClick={search(keyword.value)} key={keyword.value}>
            {keyword.value}
          </li>
        ))}
    </SearchListUl>
  ) : null;
};

SearchBar.RecentSearchList = RecentSearchList;
SearchBar.defaultProps = {
  placeholder: "",
  keywordBox: true,
};

export default SearchBar;