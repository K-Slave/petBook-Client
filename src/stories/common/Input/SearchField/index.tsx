import { SearchOutline } from "@/stories/Icon/Search";
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import type { SearchKeywordItem } from "@lib/modules/localStorage";
import OnClickOutside from "../../OnClickOutside";
import {
  SearchFieldDiv,
  SearchFieldForm,
  SearchFieldInput,
  KeywordListBoxWrapper,
} from "./style";
import useQuerySearch, {
  useRecentSearchKeyword,
} from "@lib/hooks/common/useQuerySearch";
import ListBox from "../../ListBox";
import Typography from "../../Typography";
import Button from "../../Button";

interface Props {
  placeholder?: string;
  domain: SearchKeywordItem["domain"];
  width?: string;
  height?: string;
}

const SearchField = ({ placeholder, domain, width, height }: Props) => {
  const { searchText, handleQuerySearch, handleClearQuery } =
    useQuerySearch(domain);
  const [text, setText] = useState(searchText);
  const [showBox, setShowBox] = useState(false);
  const onFocus = () => {
    setShowBox(true);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleQuerySearch(text);
  };
  const onClickClear = () => {
    setText("");
    handleClearQuery();
  };
  return (
    <OnClickOutside
      trigger={() => {
        setShowBox(false);
      }}
    >
      <SearchFieldDiv width={width} height={height}>
        <SearchFieldForm onSubmit={onSubmitSearch}>
          <SearchFieldInput
            type="text"
            placeholder={placeholder}
            value={text}
            onChange={onChange}
            onFocus={onFocus}
          />
          {searchText ? (
            <IoCloseCircle onClick={onClickClear} />
          ) : (
            <SearchOutline />
          )}
        </SearchFieldForm>
        {showBox && (
          <KeywordListBoxWrapper top={`calc(${height || "2.5rem"} - 3px)`}>
            <RecentKeywordListBox domain={domain} />
          </KeywordListBoxWrapper>
        )}
      </SearchFieldDiv>
    </OnClickOutside>
  );
};

const RecentKeywordListBox = ({ domain }: Pick<Props, "domain">) => {
  const { list, onClickSearch } = useRecentSearchKeyword(domain);
  return (
    <ListBox
      width="100%"
      maxHeight="11.875rem"
      boxShadow="0px 3px 4px rgba(0, 0, 0, 0.1)"
      border={{
        color: "var(--black_06)",
        radius: "0",
      }}
      style={{
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
        padding: "0.8rem 0",
      }}
    >
      {list.map((keyword) => (
        <Button
          onClick={onClickSearch(keyword.value)}
          key={keyword.value}
          width="100%"
          height="fit-content"
          color="var(--black_01)"
          hoverBgColor="var(--bg_white_02)"
          style={{
            padding: "0.5rem 1rem",
            justifyContent: "flex-start",
            borderRadius: "0",
          }}
        >
          <Typography tag="span" variant="body-small-medium">
            {keyword.value}
          </Typography>
        </Button>
      ))}
      {list.length === 0 && (
        <Typography
          tag="p"
          variant="body-small-medium"
          align="center"
          color="var(--black_03)"
          style={{
            padding: "0.5rem 1rem",
          }}
        >
          최근 검색어가 없습니다.
        </Typography>
      )}
    </ListBox>
  );
};

SearchField.defaultProps = {
  placeholder: "",
  showRecentKeywords: true,
  width: "17.375rem",
  height: "2.5rem",
};

export default SearchField;
