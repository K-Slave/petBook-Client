import styled from "styled-components";
import TagList from "../TagList";

const Item = styled.li`
  display: flex;
  align-items: center;

  padding-right: 28px;

  border-radius: 16px;
  background: #ffffff;
`;

const Column = styled.div`
  padding: 32px 35px 28px 37px;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: lightgray;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 6px;
  font-weight: 500;
  .PostItem_username {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  .PostItem_date {
    margin-top: 1px;
    font-size: 12px;
    color: #777777;
  }
`;

const PreviewImage = styled.div`
  flex-shrink: 0;
  width: 385px;
  height: 207px;
  background-color: #fff6e6;
`;

const Wrapper = styled.div`
  padding-left: 37px;
  h3 {
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 20px;
  }
  .PostItem_content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #747474;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .PostItem_stats {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 34px;
    font-weight: 500;
    font-size: 12px;
    color: #777777;
  }
`;

interface Props {
  avatar: string;
  username: string;
  date: string;
  title: string;
  content: string;
  tagList: string[];
  likeCnt: number;
  commentCnt: number;
  viewCnt: number;
  previewImage: string;
}

const PostItem = ({
  avatar,
  username,
  date,
  title,
  content,
  tagList,
  likeCnt,
  commentCnt,
  viewCnt,
  previewImage,
}: Props) => {
  return (
    <Item>
      <Column>
        <Row>
          <Avatar />
          <p className="PostItem_username">{username}</p>
          <p className="PostItem_date">{date}</p>
        </Row>
        <Wrapper>
          <h3>{title}</h3>
          <p className="PostItem_content">{content}</p>
          <TagList tags={tagList} width={65} height={26} fontSize={14} />
          <p className="PostItem_stats">
            <span>공감수 {likeCnt}</span>
            <span>/</span>
            <span>댓글수 {commentCnt}</span>
            <span>/</span>
            <span>클릭수 {viewCnt}</span>
          </p>
        </Wrapper>
      </Column>
      {previewImage === "" ? null : <PreviewImage />}
    </Item>
  );
};

export default PostItem;
