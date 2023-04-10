import localConsole from "../localConsole";

const geoLocationValidate = (lat: number, lng: number) => {
  const latExp =
    /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;
  const lngExp =
    /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;

  return (
    lat > 0 &&
    lng > 0 &&
    latExp.test(lat.toString()) &&
    lngExp.test(lng.toString())
  );
};

export const koreaGeoLocationValidate = (lat: number, lng: number) => {
  localConsole?.log(lat, lng);

  const latitudeRegex =
    /^([33]\.\d{4,14}|34\.0{4,14}|[34]\.[0-9]{1,14}|35\.[0-7]{1,14}|[3-5][0-9]\.\d{1,14}|36\.[0-2]{1,14}|36\.3{1,14}|[36]\.[0-9]{1,14}|37\.[0-6]{1,14}|[37][0-9]\.\d{1,14}|38\.[0-5]{1,14}|38\.6{1,14}|[38]\.\d{1,14})$/;

  const longitudeRegex =
    /^((1[24]\.6|12[4-9]|[1-2][5-9][0-9])\.\d{1,14}|13[0-1]\.[0-9]{1,14}|131\.[0-7]{1,14})$/;

  return (
    lat > 0 &&
    lng > 0 &&
    latitudeRegex.test(lat.toString()) &&
    longitudeRegex.test(lng.toString())
  );
};

export default geoLocationValidate;
