import { Equal, Expect } from '../../src/commonness';
import { First } from '../../src/array/First';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const normalArray = [1, 2, 3, 4, 5];

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<typeof tuple>, 'tesla'>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
  // 엣지 케이스 추가
  Expect<Equal<First<[null]>, null>>,
  Expect<Equal<First<[never]>, never>>,
  Expect<Equal<First<[any]>, any>>,
  Expect<Equal<First<[unknown]>, unknown>>,
  Expect<Equal<First<readonly [1, 2, 3]>, 1>>,
  Expect<Equal<First<readonly []>, never>>,
  Expect<Equal<First<[readonly [1]]>, readonly [1]>>,
  // 일반 배열 타입 케이스
  Expect<Equal<First<number[]>, number>>,
  Expect<Equal<First<string[]>, string>>,
  Expect<Equal<First<boolean[]>, boolean>>,
  Expect<Equal<First<typeof normalArray>, number>>,
  Expect<Equal<First<Array<string>>, string>>,
  Expect<Equal<First<ReadonlyArray<number>>, number>>,
  Expect<Equal<First<[...string[]]>, string>>,
  Expect<Equal<First<[...number[]]>, number>>,
  Expect<Equal<First<[...boolean[]]>, boolean>>,
  Expect<Equal<First<[...(readonly string[])]>, string>>,
  Expect<Equal<First<[...(readonly number[])]>, number>>,
  Expect<Equal<First<[...(readonly boolean[])]>, boolean>>,
];

type errors = [
  // @ts-expect-error: type error
  First<'notArray'>,
  // @ts-expect-error: type error
  First<{ 0: 'arrayLike' }>,
  // @ts-expect-error: type error
  First<number>,
  // @ts-expect-error: type error
  First<null>,
  // @ts-expect-error: type error
  First<undefined>,
];
