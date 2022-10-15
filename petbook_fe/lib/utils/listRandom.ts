export default function listRandom(array: any[] | undefined) {
  if (!array) return 1;
  return Math.floor(array.length * Math.random());
}
