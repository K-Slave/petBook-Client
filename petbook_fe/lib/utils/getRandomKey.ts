export default function getRandomKey() {
  const key = new Date().getTime() + Math.random();
  return key;
}
