export const getMinToMs = (min: number) => {
  return min * 60 * 1000;
};

export const getDayToSeconds = (day: number) => {
  // 입력으로 받은 day를 초로 변환
  // 24 시간 * 60 분 * 60 초 = 86400
  return day * 24 * 60 * 60;
};
