import styled from "styled-components";

const WriteCategorySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: auto;

  padding-top: 72px;
  padding-bottom: 52px;

  .Category__Section__Title {
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    color: #383835;
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
  padding: 4px 16px;

  border-radius: 40px;

  white-space: nowrap;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;

  ${(props: ButtonProps) => {
    if (props.selected === props.keyword) {
      return {
        backgroundColor: "#000000",
        fontWeight: "700",
        color: "#F8F7F2",
      };
    }
    if (props.selected !== props.keyword) {
      return { backgroundColor: "#ffffff", color: "#777774" };
    }

    return { backgroundColor: "#ffffff", color: "#777774" };
  }}
`;

export { WriteCategorySection, ListDiv, WriteCategoryButtonBox };
