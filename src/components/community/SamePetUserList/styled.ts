import styled from "styled-components";
import Image from "next/image";

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 0.5rem;

  border-radius: 1rem;
`;

// SamePetUSerInfo.tsx (style) //
export const SameUserPetBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  padding: 1.25rem;

  cursor: pointer;
  border-radius: 1rem;
  background-color: #ffffff;

  .Same_User_Nick {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 700;
    font-size: 1.125rem;
    color: var(--black_03); //#777774
  }

  .Same_User_Period {
    background-color: var(--black_07);
    padding: 0.1875rem 0.625rem;
    margin-left: 0.5rem;

    border-radius: 0.625rem;
    font-size: 0.625rem;
    color: var(--black_02);
  }
`;

export const SamePetImage = styled(Image)<{ isImgExist: boolean }>`
  position: relative;
  border-radius: 50%;

  &::before {
    position: relative;
    z-index: 1;

    display: ${(props) => (props.isImgExist ? "none" : "block")};

    width: 4rem;
    height: 4rem;
    content: "";

    background-color: #d9d9d9;
  }
`;
