import { BsThreeDotsVertical, BsArrowReturnRight } from "react-icons/bs";
import styled, { css } from "styled-components";
import DetailCommonInfo from "../DetailCommonInfo";

interface CommentItemProps {
  id: number;
  username: string;
  avatar: string;
  date: string;
  content: string;
  recomment: boolean;
}

const CommentItem = ({
  username,
  avatar,
  date,
  content,
  recomment,
}: CommentItemProps) => {
  return (
    <Item recomment={recomment}>
      {recomment && <BsArrowReturnRight />}
      <div>
        <Row>
          <DetailCommonInfo username={username} date={date} avatar={avatar} />
          <button>
            <BsThreeDotsVertical />
          </button>
        </Row>
        <p className="content">{content}</p>
        <ButtonBox>
          <button>대댓글 달기</button>
          <button>좋아요 버튼</button>
        </ButtonBox>
      </div>
    </Item>
  );
};

export default CommentItem;

const notRecommentStyle = css`
  background-color: #fff;
`;

const recommentStyle = css`
  background-color: #fcf9f4;
`;

export const Item = styled.div<{ recomment: boolean }>`
  ${({ recomment }) => (recomment ? recommentStyle : notRecommentStyle)};
  width: 100%;
  padding: 32px 42px 32px 40px;
  display: flex;
  gap: 14px;
  border-bottom: 1px solid #eeeeee;
  .content {
    margin: 16px 0 10px;
    padding-right: 30px;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #747474;
  }
  & > svg {
    flex-shrink: 0;
    color: #d5c8b3;
    margin-top: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: flex-end;
  button {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #7c7c7c;
  }
`;
