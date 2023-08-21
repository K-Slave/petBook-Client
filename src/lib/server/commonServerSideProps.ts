import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import createQueryClient from "@/lib/utils/createQueryClient";
import { cookieKeyName } from "@lib/globalConst";
import { Resource } from "@lib/resources";
import { GlobalMiddleWareCache } from "@lib/types/common/MiddleWare";
import DecodedUserInfo from "@lib/types/DecodedUserInfo";
import getCookieList from "@lib/utils/getCookieList";
import { itrMap } from "@lib/utils/iterableFunctions";
import localConsole from "@lib/utils/localConsole";
import { DeviceType, UserAgentType } from "@lib/utils/userAgent/checkUserAgent";
import { PageProps } from "@pages/_app";
import parserSelector from "./parse/ResourceParser/parserSelector";

// 추후 특정 페이지에서 필요하지 않은 API 호출을 막는 용도로 사용할수 있음
const userAPIBlackList = [""];

const commonServerSideProps = <R extends Array<Resource<any, any>>>(
  requiredResources?: R,
  getServerSidePropsFunc?: (
    ctx: GetServerSidePropsContext
  ) => Promise<{ props: object }>
) => {
  const returningPromise: GetServerSideProps<PageProps> = async (
    context: GetServerSidePropsContext
  ) => {
    const queryClient = createQueryClient();
    try {
      const device = context.req.cookies[cookieKeyName.device] as
        | DeviceType
        | undefined;
      const agentName = context.req.cookies[cookieKeyName.agentName] as
        | UserAgentType
        | undefined;
      const userToken = context.req.cookies[cookieKeyName.userToken];
      const decodedTokenValue: DecodedUserInfo | null = JSON.parse(
        context.req.cookies[cookieKeyName.userInfo] || "null"
      );
      const checkedOwnerToken =
        context.req.cookies[cookieKeyName.ownerChecking];

      // getServerSidePropsFunc 가 존재하면 해당 함수를 실행하고 반환된 props 를 반환
      if (getServerSidePropsFunc) {
        const { props } = await getServerSidePropsFunc(context);
        return {
          props: {
            ...props,
            dehydratedState: dehydrate(queryClient),
            userToken: userToken || null,
            ownerToken: checkedOwnerToken || null,
            decodedTokenValue,
            cookieList: context.req.cookies,
            device: device || null,
            agentName: agentName || null,
            requiredResources: JSON.parse(JSON.stringify(requiredResources)),
          },
        };
      }

      // requiredResources 가 존재하면 해당 리소스들을 fetch
      // fetch 된 리소스들은 dehydrate 를 통해 state 에 저장
      // 이후 state 를 props 로 반환
      // 이후 페이지에서 해당 리소스들을 사용할 수 있음
      // Promise.all 에 의한 병렬 비동기 처리
      if (requiredResources) {
        await Promise.all(
          itrMap(
            (resource: Resource) =>
              parserSelector(context, resource, queryClient),
            requiredResources
          )
        );
      }

      const usedResource = queryClient
        .getQueryCache()
        .getAll()
        .map((elem) => {
          if (elem.queryKey[1]) {
            const paramsObj = elem.queryKey[1] as { params: object };

            return {
              key: elem.queryKey,
              name: elem.queryKey[0],
              params: {
                ...paramsObj.params,
              },
            };
          }

          return {
            key: elem.queryKey,
            name: elem.queryKey[0],
          };
        });

      return {
        props: {
          dehydratedState: dehydrate(queryClient),
          userToken: userToken || null,
          ownerToken: checkedOwnerToken || null,
          decodedTokenValue,
          cookieList: context.req.cookies,
          device: device || null,
          agentName: agentName || null,
          requiredResources: JSON.parse(JSON.stringify(usedResource)),
        },
      };
    } catch (err) {
      console.log(err);
      context.res?.writeHead(400, "Bad Request");
      context.res?.write(JSON.stringify(err));
      context.res?.end();
    }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        ownerToken: null,
        userToken: null,
        decodedTokenValue: null,
        cookieList: null,
        device: null,
        agentName: null,
      },
    };
  };

  return returningPromise;
};

export default commonServerSideProps;
