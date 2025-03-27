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
];
