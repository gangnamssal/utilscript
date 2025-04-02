import { Equal, Expect } from '../../src/commonness';
import { GreaterThan } from '../../src/number/GreaterThan';

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 3>, true>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<100, 99>, true>>,
  Expect<Equal<GreaterThan<123, 122>, true>>,
  Expect<Equal<GreaterThan<0, 1>, false>>,
  Expect<Equal<GreaterThan<3, 5>, false>>,
  Expect<Equal<GreaterThan<9, 10>, false>>,
  Expect<Equal<GreaterThan<99, 100>, false>>,

  // 엣지 케이스 추가
  Expect<Equal<GreaterThan<1, 1>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<999, 999>, false>>,
  Expect<Equal<GreaterThan<1000, 999>, true>>,
  Expect<Equal<GreaterThan<999, 1000>, false>>,
  Expect<Equal<GreaterThan<-1, -2>, true>>,
  Expect<Equal<GreaterThan<-2, -1>, false>>,
  Expect<Equal<GreaterThan<-1, 0>, false>>,
  Expect<Equal<GreaterThan<0, -1>, true>>,

  // @ts-expect-error: 숫자 타입이 아닌 경우
  GreaterThan<string, number>,
  // @ts-expect-error: 숫자 타입이 아닌 경우
  GreaterThan<number, string>,
  // @ts-expect-error: 숫자 타입이 아닌 경우
  GreaterThan<boolean, number>,
  // @ts-expect-error: 숫자 타입이 아닌 경우
  GreaterThan<null, number>,
  // @ts-expect-error: 숫자 타입이 아닌 경우
  GreaterThan<undefined, number>,
];
