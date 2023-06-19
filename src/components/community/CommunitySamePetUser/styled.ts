import styled from "styled-components";

const CommunitySamePetUserBox = styled.div`
  display: flex;
  margin-top: 56px;

  color: var(--black_01);

  .Same_User_Wrap {
    flex: 1;

    h3 {
      margin: 52px 0 28px;

      font-size: 22px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .Same_User_Box {
      margin-top: 28px;
      margin-right: 24px;
      padding: 24px;

      border-radius: 16px;
      background-color: var(--bg_white_01);
    }
  }

  .Banner_Wrap {
    flex-direction: column;
    flex: 1;

    border-radius: 16px;

    background-color: var(--primary);
    font-size: 34px;
    color: var(--bg_white_02);

    .Banner_Box {
      padding: 72px 40px;
    }

    .Banner_Text {
      padding-top: 20px;
      font-size: 22px;
    }
  }
`;

export default CommunitySamePetUserBox;
