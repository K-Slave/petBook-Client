import keyName from "@lib/commonValue/keyName";
import CookieService from "@lib/server/service/CookieService";
import localConsole from "@lib/utils/localConsole";

export default class CookieController extends CookieService {
  public create = () => {
    try {
      const cookieKey = String(this.nextReq.body.key);
      const cookieValue = JSON.stringify(this.nextReq.body.value);

      const result = this.setCookie(cookieKey, cookieValue);
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
      return this.nextRes.status(400).json(err);
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
      const result = this.removeCookie(keyName.userToken);
      this.nextRes.status(200).json(result);

      return result;
    } catch (err) {
      return this.nextRes.status(400).json(err);
    }
  };
}
