import {
  HOSPITAL_DETAIL,
  HOSPITAL_LIST,
  HOSPITAL_REVIEW_LIST,
} from "@lib/resources/hospitalResource";
import ResourceParser from "./ResourceParser";
import cookies from "next-cookies";
import { UserLocationData } from "@lib/types/CacheData";
import hospitalOptions from "@lib/globalConst/hospitalOptions";
import { cookieKeyName } from "@lib/globalConst";

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

    return this.clientFetch<typeof HOSPITAL_LIST["params"]>(payload);
  };

  public detailFetch = async () => {
    const { query } = this.context;
    const payload = {
      pathParam: String(query.id),
    };

    return this.clientFetch<typeof HOSPITAL_DETAIL["params"]>(payload);
  };

  public reviewListFetch = async () => {
    const { query } = this.context;
    const payload = {
      params: {
        hospitalId: Number(query.id),
        page: 0,
        size: 20,
      },
    };

    return this.clientFetch<typeof HOSPITAL_REVIEW_LIST["params"]>(payload);
  };
}
