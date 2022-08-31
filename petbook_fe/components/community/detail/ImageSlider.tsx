import styled from "styled-components";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  return images.length !== 0 ? (
    <Slider>
      {images.map((image, index) => (
        <DummyImage key={index} />
      ))}
    </Slider>
  ) : (
    <Spacer />
  );
};

export default ImageSlider;

const Slider = styled.div`
  display: flex;
  gap: 17px;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 32px 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DummyImage = styled.div`
  width: 354px;
  height: 354px;
  background-color: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
`;

const Spacer = styled.div`
  height: 80px;
`;
