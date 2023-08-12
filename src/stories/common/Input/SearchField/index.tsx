import React, {
  type PropsWithChildren,
  type FocusEventHandler,
  type MouseEventHandler,
  useState,
  useEffect,
} from "react";
import { IoCloseCircle } from "react-icons/io5";
import { SearchOutline } from "@/stories/Icon/Search";
import useQuerySearch, {
  useClearQuerySearch,
  useRecentSearchKeywordList,
} from "@lib/hooks/common/useQuerySearch";
import type { SearchKeywordItem } from "@lib/modules/localStorage";
import Button, { type ButtonProps } from "../../Button";
import ListBox, { type ListBoxProps, type ListItem } from "../../ListBox";
import OnClickOutside from "../../OnClickOutside";
import Typography from "../../Typography";
import CommonInput, { type CommonInputProps } from "../CommonInput/CommonInput";
import { SearchFieldDiv, SearchForm, KeywordListBoxWrapper } from "./style";

export interface SearchFieldProps {
  domain?: SearchKeywordItem["domain"];
  placeholder?: string;
  width?: string;
  height?: string;
  focusColor?: string;
  activeColor?: string;
  KeywordListBox?: React.ReactNode;
  SearchIcon?: React.ReactNode;
  SearchFieldInput?: ReturnType<typeof getSearchFieldInput>;
  ClearButton?: ReturnType<typeof getClearButton>;
}

const SearchField = ({
  placeholder,
  domain,
  width,
  height,
  focusColor,
  activeColor,
  KeywordListBox,
  SearchIcon,
  ...props
}: SearchFieldProps) => {
  const { searchText, handleQuerySearch } = useQuerySearch(domain);
  const { handleClearQuery } = useClearQuerySearch();
  const [text, setText] = useState(searchText);
  const [showBox, setShowBox] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onFocus = () => {
    setShowBox(true);
  };
  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleQuerySearch(text);
  };
  const onClickClear = () => {
    setText("");
    handleClearQuery();
  };
  const SearchFieldInput =
    props?.SearchFieldInput || SearchField.DefaultSearchFieldInput;
  const ClearButton = props?.ClearButton || SearchField.DefaultClearButton;
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
      <SearchFieldDiv width={width} height={height}>
        <SearchForm
          onSubmit={onSubmitSearch}
          focusColor={focusColor}
          activeColor={text && activeColor}
        >
          <SearchFieldInput
            value={text}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
          />
          <div className="search-input-icon">
            {searchText && text ? (
              <ClearButton onClickClear={onClickClear} />
            ) : (
              SearchIcon || <SearchOutline />
            )}
          </div>
        </SearchForm>
        {KeywordListBox && (
          <KeywordListBoxWrapper
            top={`calc(${height || "2.5rem"} - 3px)`}
            show={showBox}
          >
            {KeywordListBox}
          </KeywordListBoxWrapper>
        )}
      </SearchFieldDiv>
    </OnClickOutside>
  );
};

interface SearchFieldInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: FocusEventHandler;
  placeholder?: string;
}
interface InputProps extends CommonInputProps {
  borderColor?: { withoutValue?: string; withValue?: string };
}
const getSearchFieldInput = ({
  type,
  style,
  borderColor,
  ...props
}: InputProps) => {
  const SearchFieldInput = ({
    value,
    placeholder,
    onChange,
    onFocus,
  }: SearchFieldInputProps) => {
    const borderColorWithValue = borderColor?.withValue || "var(--black_01)";
    const borderColorWithoutValue =
      borderColor?.withoutValue || "var(--black_04)";
    return (
      <CommonInput
        type={type}
        placeholderColor="var(--black_05)"
        {...props}
        className={
          props.className ? `search-input ${props.className}` : "search-input"
        }
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        width="100%"
        height="100%"
        style={{
          padding: "0 3rem 0 0.5rem",
          border: `1px solid ${
            value ? borderColorWithValue : borderColorWithoutValue
          } `,
          ...style,
        }}
      />
    );
  };
  return SearchFieldInput;
};

interface ClearButtonProps {
  onClickClear: MouseEventHandler;
}
const getClearButton = ({
  style,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const ClearButton = ({ onClickClear }: ClearButtonProps) => {
    return (
      <Button
        color="inherit"
        {...props}
        onClick={onClickClear}
        height="100%"
        style={{
          transition: "unset",
          ...style,
        }}
      >
        {children || <IoCloseCircle fontSize="1.5rem" color="currentColor" />}
      </Button>
    );
  };
  return ClearButton;
};

const KeywordListBox = <T extends ListItem>(props: ListBoxProps<T>) => {
  return (
    <ListBox
      {...props}
      width="100%"
      style={{
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0",
        ...props.style,
      }}
    />
  );
};
KeywordListBox.defaultProps = {
  maxHeight: "11.875rem",
  boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.1)",
  border: {
    color: "var(--black_06)",
    radius: "8px",
  },
  style: {
    padding: "0.8rem 0",
  },
};

const KeywordItem = ({
  style,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Button
      {...props}
      style={{
        justifyContent: "flex-start",
        borderRadius: "0",
        ...style,
      }}
    >
      {children}
    </Button>
  );
};
KeywordItem.defaultProps = {
  width: "100%",
  height: "fit-content",
  color: "var(--black_01)",
  hoverBgColor: "var(--bg_white_02)",
  style: {
    padding: "0.5rem 1rem",
  },
};

interface RecentKeywordListBoxProps {
  domain: SearchKeywordItem["domain"];
}
const RecentKeywordListBox = ({ domain }: RecentKeywordListBoxProps) => {
  const { list } = useRecentSearchKeywordList(domain);
  const { handleQuerySearch } = useQuerySearch(domain);
  return (
    <SearchField.KeywordListBox
      list={list}
      renderItem={(item) => (
        <SearchField.KeywordItem onClick={() => handleQuerySearch(item.value)}>
          <Typography tag="span" variant="body-small-medium">
            {item.value}
          </Typography>
        </SearchField.KeywordItem>
      )}
      EmptyGuide={
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
      }
    />
  );
};

SearchField.getSearchFieldInput = getSearchFieldInput;
SearchField.getClearButton = getClearButton;
SearchField.DefaultSearchFieldInput = getSearchFieldInput({ type: "text" });
SearchField.DefaultClearButton = getClearButton({});
SearchField.KeywordListBox = KeywordListBox;
SearchField.KeywordItem = KeywordItem;
SearchField.RecentKeywordList = RecentKeywordListBox;
SearchField.defaultProps = {
  placeholder: "",
  showRecentKeywords: true,
  width: "17.375rem",
  height: "2.5rem",
  focusColor: "var(--primary)",
  SearchFieldInput: SearchField.DefaultSearchFieldInput,
  ClearButton: SearchField.DefaultClearButton,
};

export default SearchField;
