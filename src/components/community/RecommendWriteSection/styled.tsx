import styled from "styled-components";

const RecommendSectionBox = styled.section`
  padding: 3.25rem 12.5rem 3.75rem;

  background-color: #eeede7;

  color: var(--black_01);
  & > .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-bottom: 1.75rem;

    h3 {
      font-size: 1.375rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export default RecommendSectionBox;
