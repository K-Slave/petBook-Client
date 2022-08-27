import styled from "styled-components";

interface PostItemProps {
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
}: PostItemProps) => {
  return (
    <Item>
      <Column>
        <Row>
          <Avatar />
          <p className="PostItem__username">{username}</p>
          <p className="PostItem__date">{date}</p>
        </Row>
        <Wrapper>
          <h3>{title}</h3>
          <p className="PostItem__content">{content}</p>
          <div className="PostItem__tagList">
            {tagList.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <p className="PostItem__stats">
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

const Item = styled.li`
  background: #ffffff;
  border-radius: 16px;
  padding-right: 28px;
  display: flex;
  align-items: center;
`;

const Column = styled.div`
  padding: 32px 35px 28px 37px;
`;

const Avatar = styled.div`
  background-color: lightgray;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 6px;
  font-weight: 500;
  .PostItem__username {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  .PostItem__date {
    font-size: 12px;
    color: #777777;
    margin-top: 1px;
  }
`;

const PreviewImage = styled.div`
  width: 385px;
  height: 207px;
  background-color: #fff6e6;
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  padding-left: 37px;
  h3 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 6px;
  }
  .PostItem__content {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #747474;
    margin-bottom: 9px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .PostItem__stats {
    font-weight: 500;
    font-size: 12px;
    color: #777777;
    margin-top: 34px;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .PostItem__tagList {
    display: flex;
    gap: 4px;
    span {
      background: #f0f0f0;
      border-radius: 5px;
      color: #7c7c7c;
      font-size: 14px;
      font-weight: 500;
      padding: 4px 20px;
    }
  }
`;
