import styled from "styled-components";

export const MypetListSectionBox = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
`;

export const MypetListTitleH1 = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Mypet__List__Info {
    display: grid;
    grid-auto-flow: column;
    gap: 0.5rem;

    font-weight: 700;
    font-size: 1.375rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #383835;

    .Mypet__Info__Count {
      font-weight: 700;
      font-size: 1.375rem;
      line-height: 2rem;
      letter-spacing: -0.02em;
      color: #aaaaa7;
    }
  }

  .Mypet__More__Button {
    width: 2.5625rem;
    height: 1.625rem;

    transition: all 0.2s ease-in-out;

    border-radius: 10px;

    .Mypet__More__Text {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.625rem;
      letter-spacing: -0.02em;
      color: #383835;
      border-bottom: 1px solid #383835;
    }
  }

  .Mypet__More__Button:hover {
    opacity: 0.7;
  }
`;

export const MypetListDiv = styled.div<{ isTwoLine: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  width: 65vw;
  max-width: 78rem;
  min-height: 11.25rem;
`;
