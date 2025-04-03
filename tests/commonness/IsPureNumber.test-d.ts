import { Equal, Expect, IsPureNumber } from '../../src/commonness';

type cases = [
  Expect<Equal<IsPureNumber<number>, true>>,
  Expect<Equal<IsPureNumber<123>, false>>,
  Expect<Equal<IsPureNumber<0>, false>>,
  Expect<Equal<IsPureNumber<-1>, false>>,
  Expect<Equal<IsPureNumber<string>, false>>,
  Expect<Equal<IsPureNumber<boolean>, false>>,
  Expect<Equal<IsPureNumber<any>, false>>,
  Expect<Equal<IsPureNumber<never>, false>>,

  // 엣지 케이스
  Expect<Equal<IsPureNumber<number | string>, false>>,
  Expect<Equal<IsPureNumber<number & string>, false>>,
  Expect<Equal<IsPureNumber<{}>, false>>,
  Expect<Equal<IsPureNumber<object>, false>>,
  Expect<Equal<IsPureNumber<undefined>, false>>,
  Expect<Equal<IsPureNumber<null>, false>>,
  Expect<Equal<IsPureNumber<number[]>, false>>,
  Expect<Equal<IsPureNumber<Record<string, number>>, false>>,
  Expect<Equal<IsPureNumber<unknown>, false>>,

  // 추가 엣지 케이스
  Expect<Equal<IsPureNumber<() => {}>, false>>,
  Expect<Equal<IsPureNumber<() => number>, false>>,
  Expect<Equal<IsPureNumber<bigint>, false>>,
  Expect<Equal<IsPureNumber<symbol>, false>>,
  Expect<Equal<IsPureNumber<number | null>, false>>,
  Expect<Equal<IsPureNumber<number | undefined>, false>>,
  Expect<Equal<IsPureNumber<Readonly<number>>, true>>,
  Expect<Equal<IsPureNumber<1 | 2 | 3>, false>>,
  Expect<Equal<IsPureNumber<number extends infer T ? T : never>, true>>,
];
