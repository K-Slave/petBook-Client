import SearchIcon from "@components/common/icon/Search";
import navigator from "@lib/modules/navigator";
import React, {
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { IoCloseCircle } from "react-icons/io5";
import useClickOutside from "@lib/hooks/common/useClickOutside";
import { removeQuery, replaceQuery } from "@lib/modules/queryString";
import { SearchBarDiv, SearchBarInput, KeywordUl } from "./styled";

interface Props {
  placeholder?: string;
  keywordBox?: boolean;
}

const QUERY_KEY = "query";

const SearchBar = ({ placeholder, keywordBox }: Props) => {
  const router = useRouter();
  const { query } = router.query;
  const searchText = query === undefined ? "" : (query as string);
  const [text, setText] = useState(searchText);
  const [showBox, setShowBox] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
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
        router,
        key: QUERY_KEY,
        query: text,
      });
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
    const url = removeQuery({ router, key: QUERY_KEY });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };
  useEffect(() => {
    setText(searchText);
  }, [searchText]);
  useClickOutside(ref, () => {
    setShowBox(false);
  });
  return (
    <SearchBarDiv onKeyUp={search} ref={ref}>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={onChange}
        onFocus={onFocus}
      />
      {searchText ? <IoCloseCircle onClick={clear} /> : <SearchIcon />}
      {keywordBox && showBox && <SearchBar.KeywordBox />}
    </SearchBarDiv>
  );
};

const LIST = ["늘푸른병원", "햄스터 병원", "토끼 병원"];

const KeywordBox = () => {
  const router = useRouter();
  const search = (keyword: string) => () => {
    const url = replaceQuery({
      router,
      key: QUERY_KEY,
      query: keyword,
    });
    navigator({
      url,
      options: {
        shallow: true,
      },
    });
  };
  return (
    <KeywordUl>
      {LIST.map((keyword) => (
        <li onClick={search(keyword)}>{keyword}</li>
      ))}
    </KeywordUl>
  );
};

SearchBar.KeywordBox = KeywordBox;
SearchBar.defaultProps = {
  placeholder: "",
  keywordBox: true,
};

export default SearchBar;
