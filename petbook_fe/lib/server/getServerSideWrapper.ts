import type { Resource } from "@lib/resources";
import type { GetServerSidePropsContext } from "next";
import createQueryClient from "@lib/utils/createQueryClient";
import { itrMap } from "@lib/utils/iterableFunctions";
import getToken from "./parse/getToken";
import queryParser from "./parse/queryParser";
import { dehydrate } from "@tanstack/react-query";

export function WithResourcesServerSideProps(
  requiredResources: Resource[] = [],
  getServerSidePropsFunc?: (
    ctx: GetServerSidePropsContext
  ) => Promise<{ props: object }>
) {
  return async (context: GetServerSidePropsContext) => {
    const { token, user } = getToken(context, {
      decode: true,
    });
    const queryClient = createQueryClient();
    if (requiredResources) {
      await Promise.all(
        itrMap(
          (resource: Resource) => queryParser(context, resource, queryClient),
          requiredResources
        )
      );
    }
    if (getServerSidePropsFunc) {
      const { props } = await getServerSidePropsFunc(context);
      return {
        props: {
          token,
          user,
          dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
          ...props,
        },
      };
    }
    return {
      props: {
        token,
        user,
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  };
}

export function withAuthServerSideProps(
  getServerSidePropsFunc?: (
    ctx: GetServerSidePropsContext
  ) => Promise<{ props: object }>
) {
  return async (context: GetServerSidePropsContext) => {
    const { token, user } = getToken(context, {
      decode: true,
    });
    if (getServerSidePropsFunc) {
      const { props } = await getServerSidePropsFunc(context);
      return {
        props: {
          token,
          user,
          ...props,
        },
      };
    }
    return { props: { token, user } };
  };
}
