import styled from "styled-components";

export const CategoryNavDiv = styled.div<{ list: boolean }>`
  display: flex;
  gap: ${({ list }) => (list ? "8px" : "16px")};
  flex-wrap: wrap;
  margin: ${({ list }) => (list ? "20px 0 0 0" : "0 0 31px 0")};
`;
