import { Equal, Expect, Absolute } from '../../src/commonness';

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>,

  // 추가 테스트 케이스
  Expect<Equal<Absolute<''>, never>>,
  Expect<Equal<Absolute<'-'>, never>>,
  Expect<Equal<Absolute<'--5'>, '5'>>,
  Expect<Equal<Absolute<'-0.5'>, '0.5'>>,
  Expect<Equal<Absolute<-0.5>, '0.5'>>,
  Expect<Equal<Absolute<'-9007199254740991'>, '9007199254740991'>>,
  Expect<Equal<Absolute<-9007199254740991>, '9007199254740991'>>,

  // 엣지 케이스
  Expect<Equal<Absolute<'abc'>, never>>,
  Expect<Equal<Absolute<'-abc'>, never>>,
  Expect<Equal<Absolute<'NaN'>, never>>,
  Expect<Equal<Absolute<'-Infinity'>, never>>,
  Expect<Equal<Absolute<number>, never>>,
  Expect<Equal<Absolute<any>, never>>,
  Expect<Equal<Absolute<-0n>, '0'>>,
  Expect<Equal<Absolute<`-${string}`>, never>>,

  // @ts-expect-error: type error
  Expect<Equal<Absolute<unknown>, never>>,
];
