import { cookieKeyName } from "@lib/globalConst";
import CookieService from "@lib/server/service/CookieService";
import localConsole from "@lib/utils/localConsole";

export default class CookieController extends CookieService {
  public create = () => {
    try {
      const cookieKey = String(this.nextReq.body.key);
      const cookieValue = JSON.stringify(this.nextReq.body.value);
      const cookieSave = this.nextReq.body.isSave;

      const result = this.setCookie(cookieKey, cookieValue, cookieSave);
      this.nextRes.status(200).json(result);

      return result;
    } catch (err) {
      localConsole?.warn(err);
      return this.nextRes.status(400).json(err);
    }
  };

  public read = () => {
    try {
      const result = this.getCookie();
      this.nextRes.status(200).json(result);

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      return this.nextRes.status(400).json({ message: errorMessage });
    }
  };

  public readList = () => {};

  public update = () => {
    try {
      const result = this.patchCookie();
      this.nextRes.status(200).json(result);

      return result;
    } catch (err) {
      localConsole?.warn(err);
      return this.nextRes.status(400).json(err);
    }
  };

  public delete = () => {
    try {
      const result = this.removeCookie(cookieKeyName.userToken);
      this.nextRes.status(200).json(result);

      return result;
    } catch (err) {
      return this.nextRes.status(400).json(err);
    }
  };
}
