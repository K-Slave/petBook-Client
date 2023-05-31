import createQueryClient from "@/lib/utils/createQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Resource } from "@lib/resources";
import parserSelector from "./parse/ResourceParser/parserSelector";
import { itrMap } from "@lib/utils/iterableFunctions";
import getToken from "./parse/getToken";
import getCookieList from "@lib/utils/getCookieList";
import { checkDevice, checkUserAgent } from "@lib/utils/checkUserAgent";
import { PageProps } from "@pages/_app";
import { cookieKeyName, cookieOptions } from "@lib/globalConst";
import localConsole from "@lib/utils/localConsole";

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

    // 웹 서버 request - response 처리 및 response 에러 핸들링
    try {
      const { req } = context;
      const { headers } = req;
      const url = context.req.url;
      const { ownerToken, token, user } = getToken(context, { decode: true });

      const path = url?.split("?")[0];

      if (path !== "/" && !ownerToken) {
        localConsole?.log("dddddddd");
        context.res?.writeHead(301, {
          Location: `/?owner_author=true`,
        });

        context.res?.end();
      } else if (path !== "/" && ownerToken === process.env.NEXT_PUBLIC_OWNER) {
        localConsole?.log("ssssssss");

        context.res?.setHeader(
          "Set-Cookie",
          `${cookieKeyName.owner}=${process.env.NEXT_PUBLIC_OWNER}; SameSite=Strict; Max-Age=${cookieOptions.maxAge}; secure;`
        );
      }

      const userAgent = headers["user-agent"];
      const device = checkDevice(userAgent);
      const agentName = checkUserAgent(userAgent);

      const cookieList = getCookieList(context, {
        decode: true,
      });

      // 토큰이 존재하면 쿠키에 토큰을 저장
      // 보안 옵션을 추가한 쿠키를 현재 접속 시각으로부터 30일 갱신
      if (token) {
        context.res?.setHeader(
          "Set-Cookie",
          `${cookieKeyName.userToken}=${token}; Path=/; SameSite=Strict; Max-Age=2592000; secure; httpOnly;`
        );
      }

      const locationCookie = cookieList.find(
        (cookie) => cookie.key === cookieKeyName.location
      );

      // 쿠키에 location 이 존재하면 쿠키에 location 을 저장
      // 보안 옵션을 추가한 쿠키를 현재 접속 시각으로부터 30일 갱신
      if (locationCookie) {
        context.res?.setHeader(
          "Set-Cookie",
          `${locationCookie.key}=${encodeURIComponent(
            JSON.stringify(locationCookie.value)
          )}; Path=/; SameSite=Strict; Max-Age=2592000; secure;`
        );
      }

      // getServerSidePropsFunc 가 존재하면 해당 함수를 실행하고 반환된 props 를 반환
      if (getServerSidePropsFunc) {
        const { props } = await getServerSidePropsFunc(context);
        return {
          props: {
            ...props,
            dehydratedState: dehydrate(queryClient),
            token,
            ownerToken,
            user,
            cookieList,
            device,
            agentName,
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
          token,
          ownerToken,
          user,
          cookieList,
          device,
          agentName,
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
        token: null,
        ownerToken: null,
        user: null,
        cookieList: [],
        device: null,
        agentName: null,
        requiredResources: JSON.parse(JSON.stringify(requiredResources)),
      },
    };
  };

  return returningPromise;
};

export default commonServerSideProps;
