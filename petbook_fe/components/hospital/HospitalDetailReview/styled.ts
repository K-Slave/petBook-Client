import styled from "styled-components";

export const ReviewContainer = styled.section`
  padding: 32px 20px;
`;

export const ReviewContainerHeader = styled.div`
  margin-bottom: 16px;
`;

export const ReviewBox = styled.article`
  padding: 20px 16px;
  border-radius: 12px;
  background-color: var(--bg);
  margin-bottom: 8px;
`;

export const ReviewBoxHeader = styled.article`
  margin-bottom: 16px;
  position: relative;
  display: flex;
  align-items: center;
  .profile {
    width: 48px;
    height: 48px;
    background-color: #fff;
    border-radius: 50%;
    line-height: 48px;
    text-align: center;
    margin-right: 8px;
  }
  .info {
    p {
      line-height: 16.71px;
      font-weight: 400;
      font-size: 14px;
      span {
        margin-left: 8px;
      }
      .state {
        line-height: 24px;
        font-weight: 700;
      }
    }
  }
  .icon {
    position: absolute;
    right: 0;
    top: 2px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const ReviewBoxImgSlide = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 71px;
    height: 71px;
    border-radius: 8px;
    background-color: #fff;
  }
`;
export const ReviewBoxContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  height: 38px;
  color: var(--black_04);
`;
