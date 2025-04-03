import { Equal, Expect } from '../../src/commonness';
import { Last } from '../../src/array';

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  // 엣지 케이스 추가
  Expect<Equal<Last<readonly [1, 2, 3]>, 3>>,
  Expect<Equal<Last<[...string[]]>, string>>,
  Expect<Equal<Last<[[...string[]]]>, string[]>>,
  Expect<Equal<Last<[string, number, boolean]>, boolean>>,
  Expect<Equal<Last<[{ a: number }, { b: string }]>, { b: string }>>,
  Expect<Equal<Last<[any, unknown, never]>, never>>,
  Expect<Equal<Last<[undefined, null]>, null>>,
  Expect<Equal<Last<[symbol, bigint]>, bigint>>,
  Expect<Equal<Last<[{ readonly a: string }, { a?: number }]>, { a?: number }>>,
  Expect<Equal<Last<readonly [readonly string[], readonly number[]]>, readonly number[]>>,

  // @ts-expect-error: type error
  Expect<Equal<Last<number>, never>>,
  // @ts-expect-error: type error
  Expect<Equal<Last<{}>, never>>,
];
