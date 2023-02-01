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
import { SearchBarDiv, SearchBarInput, KeywordUl } from "./styled";

interface Props {
  placeholder?: string;
  baseUrl: string;
  keywordBox?: boolean;
}

const SearchBar = ({ placeholder, baseUrl, keywordBox }: Props) => {
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
  const searchArticleList: KeyboardEventHandler = (e) => {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === 13) {
      const params = new URLSearchParams(router.asPath.split("?")[1]);
      params.delete("query");
      const queryString = params.toString().length
        ? `${params.toString()}&query=${text}`
        : `query=${text}`;
      navigator({
        url: `${baseUrl[0] !== "/" ? `/${baseUrl}` : baseUrl}?${queryString}`,
        options: {
          shallow: true,
        },
      });
    }
  };
  const clear = () => {
    setText("");
    const params = new URLSearchParams(router.asPath.split("?")[1]);
    params.delete("query");
    const path = `${baseUrl[0] !== "/" ? `/${baseUrl}` : baseUrl}${
      params.toString().length ? `?${params.toString()}` : ""
    }`;
    navigator({
      url: path,
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
    <SearchBarDiv onKeyUp={searchArticleList} ref={ref}>
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
  return (
    <KeywordUl>
      {LIST.map((keyword) => (
        <li>{keyword}</li>
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
