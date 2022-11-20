import styled from "styled-components";

const WriteCategorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;
  height: auto;

  margin-top: 52px;
  margin-bottom: 32px;

  .Category__Section__Title {
    font-weight: 700;
    font-size: 1rem;
    line-height: 19px;
  }
`;

const ListDiv = styled.div`
  display: flex;
  gap: 12px;

  width: 100%;
`;

interface ButtonProps {
  selected: string;
  keyword: string;
}

const WriteCategoryButtonBox = styled.button`
  padding: 8.5px 14px;

  border-radius: 18px;

  white-space: nowrap;

  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;

  ${(props: ButtonProps) => {
    if (!props) return { backgroundColor: "#fff4e0", color: "#000" };
    if (props.selected === props.keyword) {
      return { backgroundColor: "#FF6847", fontWeight: "700", color: "#fff" };
    }
    if (props.selected !== props.keyword) {
      return { backgroundColor: "#fff4e0", color: "#000" };
    }

    return { backgroundColor: "#fff4e0", color: "#000" };
  }}
`;

export { WriteCategorySection, ListDiv, WriteCategoryButtonBox };
