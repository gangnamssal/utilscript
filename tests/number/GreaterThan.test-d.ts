import { Equal, Expect } from '../../src/commonness';
import { GreaterThan } from '../../src/number/GreaterThan';

type cases = [
  // 기본 케이스
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 3>, true>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<100, 99>, true>>,
  Expect<Equal<GreaterThan<123, 122>, true>>,
  Expect<Equal<GreaterThan<0, 1>, false>>,
  Expect<Equal<GreaterThan<3, 5>, false>>,
  Expect<Equal<GreaterThan<9, 10>, false>>,
  Expect<Equal<GreaterThan<99, 100>, false>>,

  // 엣지 케이스
  Expect<Equal<GreaterThan<1, 1>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<999, 999>, false>>,
  Expect<Equal<GreaterThan<1000, 999>, true>>,
  Expect<Equal<GreaterThan<999, 1000>, false>>,
  Expect<Equal<GreaterThan<-1, -2>, true>>,
  Expect<Equal<GreaterThan<-2, -1>, false>>,
  Expect<Equal<GreaterThan<-1, 0>, false>>,
  Expect<Equal<GreaterThan<0, -1>, true>>,

  // 성능 테스트 - 큰 숫자
  Expect<Equal<GreaterThan<9999, 9998>, true>>,
  Expect<Equal<GreaterThan<10000, 9999>, true>>,
  Expect<Equal<GreaterThan<99999, 99998>, true>>,
  Expect<Equal<GreaterThan<100000, 99999>, true>>,
  Expect<Equal<GreaterThan<999999, 999998>, true>>,

  // 성능 테스트 - 음수 큰 숫자
  Expect<Equal<GreaterThan<-9998, -9999>, true>>,
  Expect<Equal<GreaterThan<-9999, -10000>, true>>,
  Expect<Equal<GreaterThan<-99998, -99999>, true>>,
  Expect<Equal<GreaterThan<-99999, -100000>, true>>,

  // 성능 테스트 - 자릿수 차이가 큰 경우
  Expect<Equal<GreaterThan<1000, 100>, true>>,
  Expect<Equal<GreaterThan<10000, 1000>, true>>,
  Expect<Equal<GreaterThan<100000, 10000>, true>>,
  Expect<Equal<GreaterThan<100, 1000>, false>>,
  Expect<Equal<GreaterThan<1000, 10000>, false>>,
  Expect<Equal<GreaterThan<10000, 100000>, false>>,

  // 성능 테스트 - 음수와 양수 비교
  Expect<Equal<GreaterThan<-10000, 10000>, false>>,
  Expect<Equal<GreaterThan<10000, -10000>, true>>,
  Expect<Equal<GreaterThan<-100000, -10000>, false>>,
  Expect<Equal<GreaterThan<-10000, -100000>, true>>,

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
