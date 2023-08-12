import { QueryClient } from "@tanstack/react-query";
import { GetServerSidePropsContext, NextPageContext } from "next";
import {
  articleQueryKey,
  categoryQueryKey,
  commentQueryKey,
  hospitalQueryKey,
} from "@lib/globalConst/queryKey";
import { Resource } from "@lib/resources";
import ArticleParser from "./ArticleParser";
import CommentParser from "./CommentParser";
import HospitalParser from "./HospitalParser";
import ResourceParser from "./ResourceParser";

const parserSelector = (
  ctx: NextPageContext | GetServerSidePropsContext,
  resource: Resource,
  client: QueryClient
) => {
  if ("name" in resource) {
    switch (resource.name) {
      case hospitalQueryKey.list: {
        // const { query } = ctx;
        // if (query.id) return;

        const parser = new HospitalParser(ctx, resource, client);

        return parser.listFetch();
      }

      case hospitalQueryKey.detail: {
        const parser = new HospitalParser(ctx, resource, client);

        return parser.detailFetch();
      }

      case hospitalQueryKey.reviewList: {
        const parser = new HospitalParser(ctx, resource, client);

        return parser.reviewListFetch();
      }

      case articleQueryKey.list: {
        const parser = new ArticleParser(ctx, resource, client);

        return parser.listFetch();
      }

      case articleQueryKey.preview: {
        const parser = new ArticleParser(ctx, resource, client);

        return parser.listPreviewFetch();
      }

      case articleQueryKey.detail: {
        const parser = new ArticleParser(ctx, resource, client);

        return parser.detailFetch();
      }

      case articleQueryKey.popular: {
        const parser = new ArticleParser(ctx, resource, client);

        return parser.popularListFetch();
      }

      case articleQueryKey.search: {
        const parser = new ArticleParser(ctx, resource, client);

        return parser.searchFetch();
      }

      case commentQueryKey.list: {
        const parser = new CommentParser(ctx, resource, client);

        return parser.listFetch();
      }

      case categoryQueryKey.list: {
        const parser = new ResourceParser(ctx, resource, client);

        return parser.categoryListFetch();
      }

      default: {
        break;
      }
    }
  }
};

export default parserSelector;
