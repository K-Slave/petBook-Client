import styled from "styled-components";
import BackgroundImage from "@/stories/common/Image/BackgroundImage/BackgroundImage";

const SocialLoginDiv = styled.div`
  .Icon_wrap {
    margin: 0.125rem 0.25rem 0;
  }

  .Button_Wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 2.3438rem 0.5rem;
    padding: 0.875rem 0;

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
