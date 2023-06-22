import DOMPurify from "isomorphic-dompurify";
import CommonInfo from "@components/community/CommonInfo";
import { ArticleResponse } from "@lib/API/petBookAPI/types/articleRequest";
import KebabMenu from "@/stories/common/KebabMenu";
import { BookmarkOutline } from "@/stories/Icon/Bookmark";
import useModal from "@lib/hooks/common/useModal";
import { articleRequest } from "@lib/API/petBookAPI";
import TagList from "@components/community/TagList";
import { ArticleSectionBox, Spacer } from "./styled";
import ImageSlider from "../ImageSlider";
import LikeButton from "../../LikeButton";
import useUserInfo from "@lib/hooks/common/useUserInfo";
import Modal from "@/stories/common/Modal";

const dummyImage =
  "https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const ArticleSection = ({ data }: { data: ArticleResponse | undefined }) => {
  const { userData } = useUserInfo();
  console.log(userData);
  const { openModal, closeModal } = useModal();
  if (data === undefined) {
    return <ArticleSectionBox />;
  }
  const {
    id,
    title,
    content,
    user,
    category,
    tags,
    stat,
    createdAt,
    images,
    isLike,
  } = data;
  const clickDeleteMenu = () => {
    openModal(Modal, {
      subTitle: title,
      title: "정말 이 글을 삭제하시겠습니까?",
      closeModal,
      buttons: [
        {
          text: "취소",
          onClick: closeModal,
          variant: "secondary",
        },
        {
          text: "삭제하기",
          onClick: closeModal,
          variant: "primary",
        },
      ],
    });
  };
  const clickEditMenu = () => {};
  const menuList = [
    {
      name: "수정",
      onClick: clickEditMenu,
    },
    {
      name: "삭제",
      onClick: clickDeleteMenu,
    },
  ];

  return (
    <ArticleSectionBox>
      <div className="ArticleSection_Top_Row">
        <h2>{title}</h2>
        {user.id == userData?.id && (
          <KebabMenu
            MenuListBox={<KebabMenu.DefaultListBox menuList={menuList} />}
          />
        )}
      </div>
      <CommonInfo
        avatar={dummyImage}
        username={user.nickname}
        date={createdAt}
        year={1}
      />
      {category.name === "질문과 답변" ? (
        <Spacer />
      ) : content ? (
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          className="ArticleSection_Content"
        />
      ) : (
        <Spacer />
      )}
      {images.length !== 0 && <ImageSlider images={images} alt={title} />}
      <TagList tags={tags} />
      <div className="ArticleSection_Button_Box">
        <LikeButton
          id={id}
          liked={isLike}
          likeCount={stat.likeCount}
          createLike={articleRequest.article_create_like}
          deleteLike={articleRequest.article_delete_like}
        />
        <div>
          <button type="button">
            <BookmarkOutline />
          </button>
          <span className="scrapCount">0</span>
        </div>
      </div>
    </ArticleSectionBox>
  );
};

export default ArticleSection;
