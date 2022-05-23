import styled from "styled-components";

export const SkeletonContainer = styled.div`
  @-webkit-keyframes skeleton-gradient {
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

  @keyframes skeleton-gradient {
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

  /*해당되는 컴포넌트에 적용*/
  .Skeleton-Contaier {
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
  }
`;

const Skeleton = () => {
  return <div className='Skeleton-Contaier'></div>;
};

export default Skeleton;
