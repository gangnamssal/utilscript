import { Infer } from '../../src/array';
import { Equal, Expect } from '../../src/commonness';

const tuple = ['a', 'b', 'c'] as const;

const number = [1, 2, 3];

const boolean = [true, false];

type cases = [
  Expect<Equal<Infer<[1, 2, 3]>, 1 | 2 | 3>>,
  Expect<Equal<Infer<['a', 'b', 'c']>, 'a' | 'b' | 'c'>>,
  Expect<Equal<Infer<typeof tuple>, 'a' | 'b' | 'c'>>,
  Expect<Equal<Infer<[true, false]>, true | false>>,
  Expect<Equal<Infer<[1, 'a', true]>, 1 | 'a' | true>>,
  Expect<Equal<Infer<typeof number>, number>>,
  Expect<Equal<Infer<typeof boolean>, boolean>>,

  // 빈 배열 테스트
  Expect<Equal<Infer<[]>, never>>,

  // 중첩 배열 테스트
  Expect<Equal<Infer<[[1, 2], [3, 4]]>, [1, 2] | [3, 4]>>,

  // 객체를 포함한 배열 테스트
  Expect<Equal<Infer<[{ a: 1 }, { b: 2 }]>, { a: 1 } | { b: 2 }>>,

  // 함수를 포함한 배열 테스트
  Expect<Equal<Infer<[() => void, () => string]>, (() => void) | (() => string)>>,

  // readonly 배열 테스트
  Expect<Equal<Infer<readonly [1, 2, 3]>, 1 | 2 | 3>>,

  // 유니온 타입을 포함한 배열 테스트
  Expect<Equal<Infer<[1 | 2, 3 | 4]>, 1 | 2 | 3 | 4>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<'string'>, string>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<1>, 1>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<true>, true>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<null>, null>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<undefined>, undefined>>,

  // @ts-expect-error: type error
  Expect<Equal<Infer<{}>, {}>>,
];
