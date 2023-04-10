import localConsole from "@lib/utils/localConsole";

const mapLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const defaultLevelSelector = (lat: number) => {
  return lat.toString().split(".")[1].length;
};

const mapsLevelSelector = (latitude: number) => {
  const splitString = latitude.toString().split(".");

  if (splitString.length > 1) {
    const floatString = splitString[1];
    const level = mapLevel[mapLevel.length - 1 - floatString.length];

    return level;
  }
  return 3;
};

export default mapsLevelSelector;
