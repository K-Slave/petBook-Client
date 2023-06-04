import styled from "styled-components";

export const ReviewBox = styled.article`
  position: relative;
  border-radius: 12px;
  background-color: var(--bg_white_02);
  padding: 0.6875rem 1rem;
  &:has(.GOOD) {
    margin-bottom: 0.5rem;
  }
`;

export const ReveiwBoxHeader = styled.hgroup`
  display: flex;
  margin-bottom: 0.25rem;

  border-radius: 12px;
  background-color: var(--bg_white_02);

  font-size: 14px;
  font-weight: 700;
  line-height: 1.5rem;
  &.GOOD {
    color: #1ed900;
  }
  &.BAD {
    color: #ff6847;
  }
`;

export const ReveiwBoxBody = styled.div`
  font-size: 0.875rem;
  line-height: 1.1875rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--black_04);

  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ReviewBoxButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
