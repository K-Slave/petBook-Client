import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { sliderModalState } from "../../../../atoms/pageAtoms/community/sliderModal";

const Slider = styled.div`
  display: flex;
  gap: 17px;
  overflow-x: scroll;
  margin: 32px 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DummyImage = styled.img`
  max-width: 354px;
  max-height: 354px;
  background-color: #d9d9d9;
  border-radius: 16px;
  object-fit: cover;
  flex-shrink: 0;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 80px;
`;

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const setModalState = useSetRecoilState(sliderModalState);
  return images.length !== 0 ? (
    <Slider>
      {images.map((image, index) => (
        <DummyImage
          src={image}
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          onClick={() =>
            setModalState({
              show: true,
              currentIndex: index,
              prevIndex: index === 0 ? images.length - 1 : index - 1,
            })}
        />
      ))}
    </Slider>
  ) : (
    <Spacer />
  );
};

export default ImageSlider;
