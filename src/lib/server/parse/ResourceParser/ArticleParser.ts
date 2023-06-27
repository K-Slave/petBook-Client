import {
  ARTICLE_DETAIL,
  ARTICLE_LIST,
  ARTICLE_LIST_PREVIEW,
  ARTICLE_POPULAR_LIST,
  ARTICLE_SEARCH,
} from "@lib/resources/articleResource";
import ResourceParser from "./ResourceParser";
import { categoryRequest } from "@lib/API/petBookAPI";
import { itrMap } from "@lib/utils/iterableFunctions";

export default class ArticleParser extends ResourceParser {
  public listFetch = async () => {
    const { query } = this.context;
    const categoryId = query.category
      ? (query.category as string).split("_")[1]
      : "";
    const page = Number(query.page);
    const payload = {
      params: {
        categoryId,
        page: Number.isNaN(page) ? 0 : page - 1,
        size: 20,
        popular: false,
      },
    };

    return this.clientFetch<typeof ARTICLE_LIST["params"]>(payload);
  };

  public listPreviewFetch = async () => {
    if (typeof this.resource.idx === "undefined") return;

    const ARTICLE_LIST_PREVIEW_ITEM = ARTICLE_LIST_PREVIEW[this.resource.idx];

    const payload = {
      params: {
        categoryId: this.resource.idx.toString(),
        page: 0,
        size: 5,
        popular: false,
      },
    };

    return this.clientFetch<typeof ARTICLE_LIST_PREVIEW_ITEM["params"]>(
      payload
    );

    // const { response } = await categoryRequest.category_list();
    // response.data.result.push({ id: 0, name: '전체' });
    // const promises = Promise.all(
    //   itrMap(async (category) => {
    //     const { id } = category;
    //     const payload = {
    //       params: {
    //         categoryId: id.toString(),
    //         page: 0,
    //         size: 5,
    //         popular: false,
    //       },
    //     };
    //     const ARTICLE_LIST_PREVIEW_ITEM = ARTICLE_LIST_PREVIEW[id];
    //     return this.clientFetch<typeof ARTICLE_LIST_PREVIEW_ITEM['params']>(
    //       payload
    //     );
    //   }, response.data.result)
    // );
    // return promises;
  };

  public detailFetch = async () => {
    const { query } = this.context;

    if (!query.articleId) return;

    const payload = {
      pathParam: query.articleId as string,
    };

    return this.clientFetch<typeof ARTICLE_DETAIL["params"]>(payload);
  };

  public popularListFetch = async () => {
    const payload = {
      params: {
        categoryId: "",
        page: 0,
        size: 5,
        popular: true,
      },
    };

    return this.clientFetch<typeof ARTICLE_POPULAR_LIST["params"]>(payload);
  };

  public searchFetch = async () => {
    const { query } = this.context;
    if (!query.query) return;
    const categoryId = query.category
      ? (query.category as string).split("_")[1]
      : "";
    const page = Number(query.page);
    const payload = {
      params: {
        categoryId: !categoryId ? null : Number(categoryId),
        page: Number.isNaN(page) ? 0 : page - 1,
        size: 20,
        searchText: query.query as string,
      },
    };

    return this.clientFetch<typeof ARTICLE_SEARCH["params"]>(payload);
  };
}
