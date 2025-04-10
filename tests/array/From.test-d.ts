import { Equal, Expect } from '../../src/commonness';
import { From } from '../../src/array';

type cases = [
  Expect<Equal<From<0>, []>>,
  Expect<Equal<From<2>, [unknown, unknown]>>,
  Expect<Equal<From<999>['length'], 999>>,
  // @ts-expect-error: type error
  Expect<Equal<From<1000>['length'], 1000>>,
  // 엣지 케이스 추가
  Expect<Equal<From<-1>, never>>,
  Expect<Equal<From<1.5>, never>>,
  Expect<Equal<From<1>['length'], 1>>,

  // @ts-expect-error: type error
  Expect<Equal<From<string>, never>>,

  // 성능 테스트 케이스
  Expect<Equal<From<100>['length'], 100>>,
  Expect<Equal<From<200>['length'], 200>>,
  Expect<Equal<From<300>['length'], 300>>,
  Expect<Equal<From<400>['length'], 400>>,
  Expect<Equal<From<500>['length'], 500>>,
  Expect<Equal<From<600>['length'], 600>>,
  Expect<Equal<From<700>['length'], 700>>,
  Expect<Equal<From<800>['length'], 800>>,
  Expect<Equal<From<900>['length'], 900>>,
];
