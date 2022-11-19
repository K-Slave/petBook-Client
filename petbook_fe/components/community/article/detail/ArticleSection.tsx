import { ARTICLE_ITEM } from "@pages/community/[articleId]";
import { useRouter } from "next/router";
import useResource from "@lib/hooks/common/useResource";
import { useSetRecoilState } from "recoil";
import imageModalState from "@atoms/pageAtoms/community/imageModalState";
import getRandomKey from "@lib/utils/getRandomKey";
import DetailCommonInfo from "../../DetailCommonInfo";
import TagList from "../../TagList";
import {
  ArticleSectionBox,
  ImageSliderDiv,
  ImageSliderImg,
  Spacer,
} from "./styled/styledArticleSection";

const dummyImages = [
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1607599193024-de4a7601aefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1629898569904-669319348211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const ArticleSection = () => {
  const router = useRouter();
  const articleId = router.query.articleId as string;
  const { data } = useResource({
    key: `${ARTICLE_ITEM.key}_${articleId}`,
    fetcher: () => ARTICLE_ITEM.fetcher(articleId),
  });
  if (data === undefined) {
    return <ArticleSectionBox />;
  }
  const { id, title, content, user, category, tags, stat, createdAt } = data.data;
  return (
    <ArticleSectionBox>
      <div className="ArticleSection_Top_Row">
        <DetailCommonInfo
          avatar=""
          username={user.nickname}
          date={createdAt.split("T")[0]}
        />
        <div className="ArticleSection_Button_Box">
          <button type="button">공유</button>
          <button type="button">신고</button>
        </div>
      </div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ImageSlider images={dummyImages} />
      <TagList tags={tags} fontSize={16} />
      <div className="ArticleSection_Bottom_Row">
        <span>관람 수 {stat.viewCount}</span>
        <button type="button">좋아요 버튼</button>
        <button type="button">스크랩</button>
      </div>
    </ArticleSectionBox>
  );
};

// ------------------------------------------

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
          key={getRandomKey()}
          onClick={() =>
            setModalState({
              show: true,
              currentIndex: index,
              prevIndex: index === 0 ? images.length - 1 : index - 1,
              images,
            })}
        />
      ))}
    </ImageSliderDiv>
  ) : (
    <Spacer />
  );
};

export default ArticleSection;
