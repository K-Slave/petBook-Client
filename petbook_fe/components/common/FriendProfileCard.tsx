import styled from "styled-components";
import { CgGenderFemale } from "react-icons/cg";
import Skeleton, { SkeletonContainer } from "./Skeleton";
import Palette from "../../lib/palette";

const FriendProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 14.875rem;
  height: 14.875rem;

  padding: 1.25rem;

  background-color: #bcdacc;
  border-radius: 15px;

  .FriendProfile-Image {
    width: 100%;
    height: 8.4375rem;
  }

  .FriendProfile-Info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 2.4375rem;

    padding: 0 0.75rem 0.25rem 0.75rem;

    background-color: ${Palette.teal[7]};
    border-radius: 10px;
  }

  svg {
    margin-top: 0.3rem;
  }
`;

const FriendProfileSkeleton = styled(SkeletonContainer)`
  .Skeleton-Contaier {
    width: 100%;
    height: 8.4375rem;
  }
`;

const FriendProfileCard = () => {
  return (
    <FriendProfileContainer>
      <FriendProfileSkeleton>
        <Skeleton></Skeleton>
      </FriendProfileSkeleton>
      {/* <img className='FriendProfile-Image' src='' alt=''></img> */}
      <p className='FriendProfile-Info'>
        <span className='FriendProfile-Text'>name / age</span>
        <CgGenderFemale />
      </p>
    </FriendProfileContainer>
  );
};

export default FriendProfileCard;
