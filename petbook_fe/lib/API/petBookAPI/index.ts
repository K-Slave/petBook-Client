import { pyPetBookClient, sprPetBookClient } from "../axios/axiosClient";
import ArticleAPI from "./articleRequest";
import AuthAPI from "./authRequest";
import UserAPI from "./userRequest";
import BoardAPI from "./boardRequest";
import CategoryAPI from "./categoryRequest";
import CategorySprAPI from "./categoryRequestSpr";

/**
 * @uri '/board'
 * @method board_list(params,config) : GET 게시글 조회
 * @method board_create(data,params,config) : POST 게시글 등록
 * @method board_update(data,params,config) : PUT 게시글 수정
 * @method board_delete(data,params,config) : DELETE 게시글 삭제
 */
export const boardRequest = new BoardAPI(
  process.env.NEXT_PUBLIC_PY_URL as string,
  "/board",
  pyPetBookClient
);

/**
 * @uri '/category'
 * @method category_list(params,config) : GET 카테고리 조회
 * @method category_create(data,params,config) : POST 카테고리 등록
 * @method category_update(data,params,config) : PUT 카테고리 수정
 * @method category_delete(data,params,config) : DELETE 카테고리 삭제
 */
export const categoryRequest = new CategoryAPI(
  process.env.NEXT_PUBLIC_PY_URL as string,
  "/category",
  pyPetBookClient
);

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
 * @uri '/api/v1/category'
 * @method category_list(config) : GET 카테고리 조회
 */
export const categorySprRequest = new CategorySprAPI(
  process.env.NEXT_PUBLIC_SPR_URL as string,
  "/api/v1/board/category",
  sprPetBookClient
);
