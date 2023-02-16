const geoLocationValidate = (lat: number, lng: number) => {
  const geoExp = /^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}/;

  return geoExp.test(lat.toString()) && geoExp.test(lng.toString());
};

export default geoLocationValidate;
