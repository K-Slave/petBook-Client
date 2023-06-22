import { SearchOutline } from "@/stories/Icon/Search";
import navigator from "@lib/modules/navigator";
import React, { KeyboardEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IoCloseCircle } from "react-icons/io5";
import { removeQuery, replaceQuery } from "@lib/modules/queryString";
import {
  addSearchKeyword,
  getSearchKeywordList,
  type SearchKeywordItem,
} from "@lib/modules/localStorage";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import OnClickOutside from "../../OnClickOutside";
import { SearchFieldDiv, SearchFieldInput, SearchListUl } from "./style";

interface Props {
  placeholder?: string;
  target: SearchKeywordItem["target"];
  width?: string;
}

const QUERY_KEY = "query";
dayjs.extend(utc);
dayjs.extend(timezone);

const SearchBar = ({ placeholder, target, width }: Props) => {
  const router = useRouter();
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
      addSearchKeyword({ target, type: "query", value: text });
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
      <SearchFieldDiv onKeyUp={search} width={width}>
        <SearchFieldInput
          type="text"
          placeholder={placeholder}
          value={text}
          onChange={onChange}
          onFocus={onFocus}
        />
        {searchText ? <IoCloseCircle onClick={clear} /> : <SearchOutline />}
        {showBox && <SearchBar.RecentKeywordList target={target} />}
      </SearchFieldDiv>
    </OnClickOutside>
  );
};

const RecentKeywordList = ({ target }: Pick<Props, "target">) => {
  const list = getSearchKeywordList(target);
  const router = useRouter();
  const search = (keyword: string) => () => {
    const url = replaceQuery({
      asPath: router.asPath,
      key: QUERY_KEY,
      query: keyword,
    });
    addSearchKeyword({ target, type: "query", value: keyword });
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
      {list.length === 0 && <p className="no-item">최근 검색어가 없습니다.</p>}
    </SearchListUl>
  ) : null;
};

SearchBar.RecentKeywordList = RecentKeywordList;
SearchBar.defaultProps = {
  placeholder: "",
  showRecentKeywords: true,
  width: "278px",
};

export default SearchBar;
