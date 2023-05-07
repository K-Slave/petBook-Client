import { COMMENT_LIST } from "@lib/resources/commentResource";
import ResourceParser from "./ResourceParser";

export default class CommentParser extends ResourceParser {
  public listFetch = async () => {
    const { query } = this.context;
    if (!query.articleId) return;
    const payload = {
      params: {
        articleId: Number(query.articleId as string),
        page: 0,
        size: 20,
      },
    };

    return this.clientFetch<typeof COMMENT_LIST["params"]>(payload);
  };
}
