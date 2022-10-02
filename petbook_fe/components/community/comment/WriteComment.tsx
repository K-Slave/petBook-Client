import styled from "styled-components";

const avatar =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const WriteComment = () => {
  return (
    <Form>
      <Row>
        <Avatar src={avatar} />
        <p>arin</p>
      </Row>
      <Textarea placeholder="당신의 의견을 남겨보세요!" />
      <SubmitButton type="submit">등록</SubmitButton>
    </Form>
  );
};

export default WriteComment;

const Form = styled.form`
  width: 100%;
  height: 175px;
  background: #ffffff;
  border: 1px solid #f5edde;
  border-radius: 16px;
  padding: 32px 30px 24px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const Textarea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  font-family: Pretendard, sans-serif;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #b1b1b1;
  }
  &::-moz-placeholder {
    color: #b1b1b1;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SubmitButton = styled.button`
  background: #eeeeee;
  border-radius: 21px;
  width: 67px;
  height: 42px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777777;
  align-self: flex-end;
`;
