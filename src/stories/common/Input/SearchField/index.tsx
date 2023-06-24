import { SearchOutline } from "@/stories/Icon/Search";
import React, {
  type PropsWithChildren,
  type FocusEventHandler,
  useState,
  useEffect,
} from "react";
import { IoCloseCircle } from "react-icons/io5";
import type { SearchKeywordItem } from "@lib/modules/localStorage";
import OnClickOutside from "../../OnClickOutside";
import { SearchFieldDiv, SearchForm, KeywordListBoxWrapper } from "./style";
import useQuerySearch, {
  useClearQuerySearch,
  useRecentSearchKeywordList,
} from "@lib/hooks/common/useQuerySearch";
import ListBox, { type ListBoxProps, type ListItem } from "../../ListBox";
import Typography from "../../Typography";
import Button, { type ButtonProps } from "../../Button";
import CommonInput, { type CommonInputProps } from "../CommonInput/CommonInput";

interface SearchFieldInputProps
  extends Pick<CommonInputProps, "placeholder" | "style"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: FocusEventHandler;
  className: string;
}

export interface SearchFieldProps {
  domain?: SearchKeywordItem["domain"];
  placeholder?: string;
  width?: string;
  height?: string;
  focusColor?: string;
  KeywordListBox?: React.ReactNode;
  SearchIcon?: React.ReactNode;
  renderInput?: (props: SearchFieldInputProps) => React.ReactNode;
  renderCloseButton?: (props?: ButtonProps) => React.ReactNode;
}

const SearchField = ({
  placeholder,
  domain,
  width,
  height,
  focusColor,
  KeywordListBox,
  SearchIcon,
  renderInput,
  renderCloseButton,
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
        <SearchForm onSubmit={onSubmitSearch} focusColor={focusColor}>
          {renderInput ? (
            renderInput({
              value: text,
              placeholder,
              onChange,
              onFocus,
              className: "search-input",
            })
          ) : (
            <SearchField.Input
              value={text}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={onFocus}
            />
          )}
          <div className="search-input-icon">
            {searchText && text ? (
              renderCloseButton ? (
                renderCloseButton({ onClick: onClickClear })
              ) : (
                <Button
                  onClick={onClickClear}
                  height="100%"
                  color="inherit"
                  style={{
                    transition: "unset",
                  }}
                >
                  <IoCloseCircle fontSize="1.5rem" color="currentColor" />
                </Button>
              )
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

const SearchFieldInput = ({
  value,
  placeholder,
  onChange,
  onFocus,
  style,
  ...props
}: CommonInputProps) => {
  return (
    <CommonInput
      className="search-input"
      placeholderColor="var(--black_05)"
      {...props}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      width="100%"
      height="100%"
      style={{
        padding: "0 3rem 0 0.5rem",
        border: "1px solid var(--black_04)",
        ...style,
      }}
    />
  );
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
SearchField.Input = SearchFieldInput;
SearchField.KeywordListBox = KeywordListBox;
SearchField.KeywordItem = KeywordItem;
SearchField.RecentKeywordList = RecentKeywordListBox;
SearchField.defaultProps = {
  placeholder: "",
  showRecentKeywords: true,
  width: "17.375rem",
  height: "2.5rem",
  placeholderColor: "var(--black_05)",
  focusBorderColor: "var(--primary)",
};

export default SearchField;
