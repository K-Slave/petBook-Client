import styled from "styled-components";

export const ReviewContainer = styled.section`
  padding: 2rem 1.25rem;
`;

export const ReviewContainerHeader = styled.div`
  margin-bottom: 1rem;
`;

export const ReviewBox = styled.article`
  padding: 1.25rem 1rem;
  border-radius: 12px;
  background-color: var(--bg);
  margin-bottom: 0.5rem;
`;

export const ReviewBoxHeader = styled.article`
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  .profile {
    width: 3rem;
    height: 3rem;
    background-color: #fff;
    border-radius: 50%;
    line-height: 3rem;
    text-align: center;
    margin-right: 0.5rem;
  }
  .info {
    p {
      line-height: 1.0444rem;
      font-weight: 400;
      font-size: 0.875rem;
      span {
        margin-left: 0.5rem;
      }
      .state {
        line-height: 1.5rem;
        font-weight: 700;
      }
    }
  }
  .icon {
    position: absolute;
    right: 0;
    top: 2px;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const ReviewBoxImgSlide = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 4.4375rem;
    height: 4.4375rem;
    border-radius: 8px;
    background-color: #fff;
  }
`;
export const ReviewBoxContent = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  height: 2.375rem;
  color: var(--black_04);
`;
