export function* infinity(i = 0) {
  while (true) yield i++;
}

export function* limit(limit: number, iter: Iterable<any>) {
  for (const idx of iter) {
    yield idx;
    if (idx === limit) return;
  }
}

export function* odds(limitNum: number) {
  for (const idx of limit(limitNum, infinity(1))) {
    if (idx % 2) yield idx;
  }
}
