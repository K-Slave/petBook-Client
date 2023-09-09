import styled from "styled-components";
import BackgroundImage from "@/stories/common/Image/BackgroundImage/BackgroundImage";

const SocialLoginDiv = styled.div`
  .naver {
    background-color: var(--green);
  }

  .kakao {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #ffb039;
  }

  .kakaoIcon {
    margin: 0.125rem 0.25rem 0;
  }

  .google {
    background-color: var(--violet);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 2.3438rem 0.5rem;
    padding: 0.875rem 0;

    border-radius: 0.5rem;

    box-sizing: border-box;

    &:last-child {
      margin-bottom: 0.75rem;
    }
  }
`;

const SocialIconImage = styled(BackgroundImage)`
  display: flex;
  align-items: center;

  box-sizing: content-box;
`;

export { SocialLoginDiv, SocialIconImage };
