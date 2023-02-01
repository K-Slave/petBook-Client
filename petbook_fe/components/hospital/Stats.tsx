import styled from "styled-components";

const Stats = () => {
  return (
    <StatsUL>
      <li>리뷰 999+</li>
      <li>책갈피 999+</li>
    </StatsUL>
  );
};

const StatsUL = styled.ul`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: var(--black_04);
`;

export default Stats;
