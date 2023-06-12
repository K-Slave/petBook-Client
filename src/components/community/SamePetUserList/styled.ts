import styled from "styled-components";
import Image from "next/image";

export const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;

  border-radius: 16px;
`;

// SamePetUSerInfo.tsx (style) //
export const SameUserPetBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  padding: 20px;

  cursor: pointer;
  border-radius: 16px;
  background-color: #ffffff;

  .Same_User_Nick {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 700;
    font-size: 18px;
    color: var(--black_03); //#777774
  }

  .Same_User_Period {
    background-color: var(--black_07);
    padding: 3px 10px;
    margin-left: 8px;

    border-radius: 10px;
    font-size: 10px;
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
