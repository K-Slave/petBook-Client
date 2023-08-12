import cookies from "next-cookies";
import { cookieKeyName } from "@lib/globalConst";
import hospitalOptions from "@lib/globalConst/hospitalOptions";
import {
  HOSPITAL_DETAIL,
  HOSPITAL_LIST,
  HOSPITAL_REVIEW_LIST,
} from "@lib/resources/hospitalResource";
import { UserLocationData } from "@lib/types/CacheData";
import ResourceParser from "./ResourceParser";

export default class HospitalParser extends ResourceParser {
  public listFetch = async () => {
    const { query } = this.context;
    const allCookies = cookies(this.context);
    const cachedData = allCookies[cookieKeyName.location] as
      | UserLocationData
      | undefined;

    const payload = {
      params: {
        page: query.page ? Number(query.page) - 1 : hospitalOptions.page,
        size: hospitalOptions.size,
        boundary:
          (cachedData && cachedData.boundary) || hospitalOptions.boundary,
      },
    };

    return this.clientFetch<(typeof HOSPITAL_LIST)["params"]>(payload);
  };

  public detailFetch = async () => {
    const { query } = this.context;
    const payload = {
      pathParam: query.id ? (query.id as string) : "",
    };

    return this.clientFetch<(typeof HOSPITAL_DETAIL)["params"]>(payload);
  };

  public reviewListFetch = async () => {
    const { query } = this.context;
    const payload = {
      params: {
        hospitalId: query.id ? Number(query.id) : 0,
        page: 0,
        size: 20,
      },
    };

    return this.clientFetch<(typeof HOSPITAL_REVIEW_LIST)["params"]>(payload);
  };
}
