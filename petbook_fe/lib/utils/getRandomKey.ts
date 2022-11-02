const getRandomKey = () => {
  const key = new Date().getTime() + Math.random();
  return key;
};

export default getRandomKey;
