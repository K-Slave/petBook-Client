import { petBookClient } from "../fetch/fetchClient";
import BoardAPI from "./boardRequest";
import CategoryAPI from "./categoryRequest";

/**
 * @uri '/board'
 * @method board_list(params) : GET 게시글 조회
 * @method board_create(data, params) : POST 게시글 등록
 * @method board_update(data, params) : PUT 게시글 수정
 * @method board_delete(data, params) : DELETE 게시글 삭제
 */
export const boardRequest = new BoardAPI(petBookClient);

/**
 * @uri '/category'
 * @method category_list(params) : GET 카테고리 조회
 * @method category_create(data, params) : POST 카테고리 등록
 * @method category_update(data, params) : PUT 카테고리 수정
 * @method category_delete(data, params) : DELETE 카테고리 삭제
 */
export const categoryRequest = new CategoryAPI(petBookClient);
