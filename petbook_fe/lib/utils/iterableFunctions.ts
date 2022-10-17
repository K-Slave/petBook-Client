// 입력받은 실행자 함수를 통해 이터러블을 새로운 배열로 반환하는 함수
export function itrMap(performer: (elem: any, idx?: number) => any, iterable: Iterable<any>) {
  let result = new Array();

  for (const item of iterable) {
    result.push(performer(item));
  }

  return result;
}

// 입력받은 실행자 함수의 조건문을 통해 조건이 true 일 경우
// 이터러블을 새로운 배열로 반환하는 함수
export function itrFilter(performer: (elem: any, idx?: number) => any, iterable: Iterable<any>) {
  let result = new Array();

  for (const item of iterable) {
    if (performer(item)) result.push(item);
  }

  return result;
}

// 이터러블 내 여러개의 값들을 하나의 값으로 표현 (축약) 하는 reduce 함수
export function itrReduce(
  performer: (result: any, data: any) => any,
  acc: number | Iterable<any>,
  iterable?: Iterable<any> | Iterator<any>
) {
  if (!iterable) {
    acc = acc as Iterable<any>;
    iterable = acc[Symbol.iterator]();
    acc = iterable.next().value;
  }

  for (const item of iterable as Iterable<any>) {
    acc = performer(acc, item);
  }

  return acc;
}

// 여러개의 함수를 값으로 평가시키고
// 연속적으로 실행시켜 하나의 값으로 축약 시켜나가는 함수
export function itrGo(...argus: any[]) {
  return itrReduce((value, fn) => fn(value), argus);
}

// ex:
//
// itrGo([
//   0,
//   (a: number) => a + 1,
//   (a: number) => a + 10,
//   (a: number) => a + 100,
//   console.log,
// ]); // 111

// 내부적으로 go 함수를 포함하고 있으며, 함수들만 먼저 받아 놓은후
// 원할때 인자로 값을 전달하며 실행시키면 연속적으로 함수들이 실행되
// 하나의 값으로 표현되는 함수
export function itrPipe(fn: (...values: number[]) => number, ...functions: ((value: number) => number)[]) {
  return (...value: number[]) => itrGo(fn(...value), ...functions);
}

// ex:
//
// const fn = itrPipe(
//   (a: number) => a + 1,
//   (a: number) => a + 10,
//   (a: number) => a + 100
// );
// console.log(fn_1(0)); // 111
