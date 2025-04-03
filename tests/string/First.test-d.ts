import { Equal, Expect } from '../../src/commonness';
import { First } from '../../src/string';

type cases = [
  Expect<Equal<First<'abc'>, 'a'>>,
  Expect<Equal<First<'123'>, '1'>>,
  Expect<Equal<First<'456'>, '4'>>,
  Expect<Equal<First<''>, never>>,
  // 엣지케이스 추가
  Expect<Equal<First<' '>, ' '>>,
  Expect<Equal<First<'한글'>, '한'>>,
  Expect<Equal<First<'\n'>, '\n'>>,
];

type errors = [
  // @ts-expect-error: type error
  First<[1, 2, 3]>,
  // @ts-expect-error: type error
  First<{ 0: 'arrayLike' }>,
  // @ts-expect-error: type error
  First<null>,
  // @ts-expect-error: type error
  First<undefined>,
  // @ts-expect-error: type error
  First<number>,
];
