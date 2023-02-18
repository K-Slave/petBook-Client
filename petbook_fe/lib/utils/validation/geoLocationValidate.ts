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

export default geoLocationValidate;
