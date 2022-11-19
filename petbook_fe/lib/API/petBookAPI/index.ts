import { sprPetBookClient } from "../axios/axiosClient";
import ArticleAPI from "./articleRequest";
import AuthAPI from "./authRequest";
import UserAPI from "./userRequest";
import CategorySprAPI from "./categoryRequestSpr";
import ImgAPI from "./imgRequest";
import CommentAPI from "./commentRequest";

/**
 * @uri '/api/v1'
 * @method login(body,config) : POST 로그인 요청
 * @method login_check(params,config) : POST 로그인 요청
 */
export const authRequest = new AuthAPI(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1",
  sprPetBookClient
);

/**
 * @uri '/api/v1/user'
 * @method register(body,config) : POST 회원가입 요청
 */
export const registerRequest = new UserAPI(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1/user",
  sprPetBookClient
);

/**
 * @uri '/api/v1/board/article'
 * @method article_create : POST 게시물 작성
 * @method article_item : GET 게시물 요청
 * @method article_list : GET 게시물 리스트 요청
 */
export const articleRequest = new ArticleAPI(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1/board/article",
  sprPetBookClient
);

/**
 * @uri '/api/v1/board/category'
 * @method category_list(config) : GET 카테고리 조회
 */
export const categorySprRequest = new CategorySprAPI(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1/board/category",
  sprPetBookClient
);

/**
 * @uri '/api/v1/board/image'
 * @method img_create : POST 이미지 첨부
 */
export const imgRequest = new ImgAPI(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1/board/image",
  sprPetBookClient
);

/**
 * @uri '/api/v1/comment'
 * @method comment_create : POST 댓글 생성
 * @method comment_update : PUT 댓글 수정
 * @method comment_delete : DELETE 댓글삭제
 * @method comment_list : GET 댓글 조회
 */
export const commentRequest = new CommentAPI(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1/board/comment",
  sprPetBookClient
);
