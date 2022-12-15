import { useSetRecoilState } from "recoil";
import DOMPurify from "isomorphic-dompurify";
import imageModalState from "@atoms/pageAtoms/community/imageModalState";
import CommonInfo from "@components/community/CommonInfo";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import DropdownMenu from "@components/common/DropdownMenu";
import CustomSwiper, { SlideNextButton, SlidePrevButton } from "@components/common/CustomSwiper";
import { SwiperSlide } from "swiper/react";
import TagList from "../../TagList";
import {
  ArticleSectionBox,
  ImageSliderDiv,
  ImageSliderImg,
  Spacer,
  MenuListBox
} from "./styled/styledArticleSection";

const dummyImage = "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const ArticleSection = ({ data }: { data: ArticleResponse | undefined }) => {
  if (data === undefined) {
    return <ArticleSectionBox />;
  }
  const { id, title, content, user, category, tags, stat, createdAt, images } = data;
  return (
    <ArticleSectionBox>
      <div className="ArticleSection_Top_Row">
        <h2>{title}</h2>
        <DropdownMenu MenuList={<MenuList />} />
      </div>
      <CommonInfo
        avatar={dummyImage}
        username={user.nickname}
        date={createdAt}
        year={1}
      />
      {category.name === "질문과 답변" ?
        <Spacer /> :
        (content ?
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
            className="ArticleSection_Content"
          />
          :
          <Spacer />
      )}
      {images.length !== 0 && <ImageSlider images={images} />}
      <TagList tags={tags} />
      <div className="ArticleSection_Bottom_Row">
        <button type="button">좋아요</button>
        <button type="button">스크랩</button>
      </div>
    </ArticleSectionBox>
  );
};

// ---------------------------------------

const MenuList = () => {
  return (
    <MenuListBox>
      <button type="button">수정</button>
      <button type="button">삭제</button>
    </MenuListBox>
  );
};

// ------------------------------------------

interface Props {
  images: ArticleResponse["images"]
}

const ImageSlider = ({ images }: Props) => {
  const setModalState = useSetRecoilState(imageModalState);
  return (
    <ImageSliderDiv>
      <SlidePrevButton />
      <CustomSwiper slidesPerView="auto" spaceBetween={17}>
        {images.map((image, index) => (
          <SwiperSlide
            key={image.id}
            onClick={() =>
              setModalState({
                show: true,
                images,
                initialImageIndex: index
              })
            }
          >
            <ImageSliderImg src={image.imageUrl} layout="fill" objectFit="cover" />
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <SlideNextButton />
    </ImageSliderDiv>
  );
};

export default ArticleSection;
