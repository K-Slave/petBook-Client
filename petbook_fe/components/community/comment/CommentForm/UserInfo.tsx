import styled from "styled-components";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";
const username = "arin";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  p {
    font-size: 14px;
  }
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  background-color: #d9d9d9;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfo = () => {
  return (
    <Row>
      <Avatar src={avatar} />
      <p>{username}</p>
    </Row>
  );
};

export default UserInfo;
