import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import imageModalState from "@atoms/pageAtoms/community/imageModalState";

const ImageSliderDiv = styled.div`
  display: flex;
  gap: 17px;
  margin: 32px 0;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ImageSliderImg = styled.img`
  flex-shrink: 0;
  max-width: 354px;
  max-height: 354px;
  border-radius: 16px;
  background-color: #d9d9d9;
  object-fit: cover;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 80px;
`;

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  const setModalState = useSetRecoilState(imageModalState);
  return images.length !== 0 ? (
    <ImageSliderDiv>
      {images.map((image, index) => (
        <ImageSliderImg
          src={image}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() =>
            setModalState({
              show: true,
              currentIndex: index,
              prevIndex: index === 0 ? images.length - 1 : index - 1,
              images,
            })
          }
        />
      ))}
    </ImageSliderDiv>
  ) : (
    <Spacer />
  );
};

export default ImageSlider;
