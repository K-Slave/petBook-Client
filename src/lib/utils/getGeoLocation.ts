const getGeoLocation = () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    const successCallBackHandler: PositionCallback = (pos) => {
      resolve(pos);
    };

    const errorCallBackHandler: PositionErrorCallback = (
      posErr: GeolocationPositionError
    ) => {
      reject(posErr);
    };

    navigator.geolocation.getCurrentPosition(
      successCallBackHandler,
      errorCallBackHandler,
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 100000,
      }
    );
  });
};

export default getGeoLocation;
