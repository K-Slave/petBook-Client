import { useRef } from "react";
import styled, { css } from "styled-components";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import useOnScreen from "../useOnScreen";
import useSelect from "../useSelect";
import useSlide from "./useSlide";

const filters = [
  "8월 1째주",
  "7월 4째주",
  "7월 3째주",
  "7월 2째주",
  "7월 1째주",
  "6월 4째주",
  "6월 3째주",
  "6월 2째주",
  "6월 1째주",
  "8월 1째주",
  "7월 4째주",
  "7월 3째주",
  "7월 2째주",
  "7월 1째주",
  "6월 4째주",
  "6월 3째주",
  "6월 2째주",
  "6월 1째주",
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;
  margin-bottom: 32px;
`;

const ControlButton = styled.button`
  background-color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
  svg {
    font-size: 20px;
  }
  &:disabled {
    cursor: auto;
  }
`;

const Filters = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-grow: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const selectedStyle = css`
  background-color: #000;
  color: #fff;
  font-weight: 700;
  width: 121px;
  height: 40px;
`;

const notSelectedStyle = css`
  color: #555555;
`;
const FilterButton = styled.button<{ selected: boolean }>`
  ${({ selected }) => (selected ? selectedStyle : notSelectedStyle)};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
`;

const WeekFilter = () => {
  const [selected, onSelect] = useSelect(0);
  const root = useRef<HTMLDivElement | null>(null);
  const leftSide = useRef<HTMLButtonElement | null>(null);
  const rightSide = useRef<HTMLButtonElement | null>(null);
  const [isLeftMost] = useOnScreen(root, leftSide);
  const [isRightMost] = useOnScreen(root, rightSide);
  const { onLeftSlide, onRightSlide } = useSlide(root);

  return (
    <Wrapper>
      <ControlButton disabled={!!isLeftMost} onClick={onLeftSlide}>
        <GoChevronLeft />
      </ControlButton>
      <Filters ref={root}>
        {filters.map((filter, index) => (
          <FilterButton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            selected={selected === index}
            onClick={() => onSelect(index)}
            ref={
              index === 0
                ? leftSide
                : index === filters.length - 1
                ? rightSide
                : null
            }
          >
            {filter}
          </FilterButton>
        ))}
      </Filters>
      <ControlButton disabled={!!isRightMost} onClick={onRightSlide}>
        <GoChevronRight />
      </ControlButton>
    </Wrapper>
  );
};

export default WeekFilter;
