/* global kakao */

import localConsole from "../localConsole";

// 지역명 - 좌표 검색
// geocoder.addressSearch(dd, (result, status) => {
//   localConsole?.log(result);
// });

// 좌표 - 주소 자세히 검색
// geocoder.coord2Address(longitude, latitude, (res) => {
//   localConsole?.log(res);
// });

const getCoord2RegionH = (latitude: number, longitude: number) => {
  return new Promise<kakao.maps.services.RegionCode>((resolve, reject) => {
    const geocoder = new kakao.maps.services.Geocoder();

    // 좌표 - 주소검색
    // [0] : 법정동 (region_type = 'B')
    // [1] : 행정동 (region_type = 'H')
    geocoder.coord2RegionCode(longitude, latitude, (res, status) => {
      try {
        if (status !== "OK") {
          throw new Error(status);
        }
        const hangJungDongRegion = res.find((elem) => elem.region_type === "H");

        localConsole?.log(hangJungDongRegion, "hangJungDongRegion");
        if (hangJungDongRegion) {
          resolve(hangJungDongRegion);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
};

export default getCoord2RegionH;
