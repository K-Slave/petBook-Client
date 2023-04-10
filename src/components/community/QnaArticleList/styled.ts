import styled from "styled-components";
import { Div } from "../CommonInfo/styled";

export const ListBox = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 24px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
  padding: 32px;
  border-radius: 16px;
  background-color: #ffefd1;
  cursor: pointer;
  h4 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 22px;
  }
  ${Div} .year {
    background-color: #ffdb97;
  }
`;
