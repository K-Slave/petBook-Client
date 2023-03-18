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
  .Profile {
    width: 3rem;
    height: 3rem;
    background-color: #d9d9d9;
    border-radius: 50%;
    line-height: 3rem;
    text-align: center;
    margin-right: 0.5rem;
  }
  .Info {
    p {
      line-height: 1.0444rem;
      font-weight: 400;
      font-size: 0.875rem;
      span {
        margin-left: 0.5rem;
      }
      &.State {
        line-height: 1.5rem;
        font-weight: 700;
        &.BAD {
          color: var(--primary);
        }
        &.GOOD {
          color: #1ed900 !important;
        }
      }
    }
  }
`;

interface slideImgProps {
  state: { id: number; imageUrl: string }[];
}

export const ReviewBoxImgSlide = styled.div`
  display: ${(props: slideImgProps) =>
    props.state.length > 0 ? "flex" : "none"} !important;
  margin-bottom: 1.25rem;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
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

interface BtnProps {
  btnState: boolean;
}

export const ReviewBoxMoreWrap = styled.section`
  article {
    background-color: #fff;
    position: absolute;
    right: 0;
    top: 32px;
    border-radius: 12px;
    border: 1px solid #eeede7;
    overflow: hidden;
    box-shadow: 0px 8px 12px rgba(50, 26, 9, 0.1);

    transition: all 0.1s;
    -webkit-transition: all 0.1s;

    transform: ${(props: BtnProps) =>
      props.btnState === true ? "translateY(0px)" : " translateY(10px)"};
    opacity: ${(props: BtnProps) => (props.btnState === true ? 1 : 0)};
    li {
      padding: 0 20px;
      width: 117px;
      line-height: 48px;
      font-weight: 400;
      font-size: 14px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        background-color: rgba(50, 26, 9, 0.05);
      }
    }
  }
`;

export const ReviewBtn = styled.div`
  position: absolute;
  right: 0;
  top: 2px;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
