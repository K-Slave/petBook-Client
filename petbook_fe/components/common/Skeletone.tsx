import styled, { css } from "styled-components";

const SkeletoneStyled = css`
  @-webkit-keyframes Skeletone-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  @keyframes Skeletone-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }

    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }

    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  /* 해당되는 컴포넌트에 적용 */
  & {
    -webkit-animation: Skeletone-gradient 1.8s infinite ease-in-out;
    animation: Skeletone-gradient 1.8s infinite ease-in-out;
  }
`;

const SkeletoneContainer = styled.div`
  ${SkeletoneStyled}
`;

const Skeletone = (props: any) => {
  return <SkeletoneContainer className="Skeletone_Contaier" {...props} />;
};

export default Skeletone;
