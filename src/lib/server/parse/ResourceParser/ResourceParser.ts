import { GetServerSidePropsContext, NextPageContext } from "next";
import type { QueryClient } from "@tanstack/react-query";
import { Resource, ResourceParams } from "@lib/resources";
import localConsole from "@lib/utils/localConsole";

export default class ResourceParser {
  constructor(
    ctx: NextPageContext | GetServerSidePropsContext,
    resource: Resource,
    client: QueryClient
  ) {
    this.context = ctx;
    this.resource = resource;
    this.client = client;
  }

  public context;
  public resource: Resource;
  public client;

  // TODO : 리소스를 클래스에 제네릭으로 넘겨줬지만, clientFetch의 payload는 any로 되어있음.
  public clientFetch = async <P extends typeof this.resource["params"]>(
    payload?: P
  ) => {
    this.resource.key = this.resource.createKey(this.resource.name, payload);

    if (payload) {
      this.resource.params = payload;
    }

    const result = await this.client.fetchQuery(this.resource.key, () =>
      this.resource.fetcher(payload as ResourceParams)
    );

    return result;
  };

  public categoryListFetch = async () => {
    return this.clientFetch();
  };
}
