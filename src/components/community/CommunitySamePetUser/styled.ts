import styled from "styled-components";

const CommunitySamePetUserBox = styled.div`
  display: flex;
  margin-top: 3.5rem;

  color: var(--black_01);

  .Same_User_Wrap {
    flex: 1;

    h3 {
      margin: 3.25rem 0 1.75rem;

      font-size: 1.375rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    .Same_User_Box {
      margin-top: 1.75rem;
      margin-right: 1.5rem;
      padding: 1.5rem;

      border-radius: 1rem;
      background-color: var(--bg_white_01);
    }
  }

  .Banner_Wrap {
    flex-direction: column;
    flex: 1;

    border-radius: 1rem;

    background-color: var(--primary);
    font-size: 2.125rem;
    color: var(--bg_white_02);

    .Banner_Box {
      padding: 4.5rem 2.5rem;
    }

    .Banner_Text {
      padding-top: 1.25rem;
      font-size: 1.375rem;
    }
  }
`;

export default CommunitySamePetUserBox;
