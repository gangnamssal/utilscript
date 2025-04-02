import { Equal, Expect } from '../../src/commonness';
import { Reverse } from '../../src/string';

type cases = [
  Expect<Equal<Reverse<'hello'>, 'olleh'>>,
  Expect<Equal<Reverse<'world'>, 'dlrow'>>,
  Expect<Equal<Reverse<'typescript'>, 'tpircsepyt'>>,
  Expect<Equal<Reverse<'1234567890'>, '0987654321'>>,
  // 엣지케이스 추가
  Expect<Equal<Reverse<''>, ''>>,
  Expect<Equal<Reverse<'a'>, 'a'>>,
  Expect<Equal<Reverse<'한글'>, '글한'>>,
  Expect<Equal<Reverse<'abcba'>, 'abcba'>>,
];

type errors = [
  // @ts-expect-error: type error
  Reverse<123>,
  // @ts-expect-error: type error
  Reverse<null>,
  // @ts-expect-error: type error
  Reverse<undefined>,
  // @ts-expect-error: type error
  Reverse<[1, 2, 3]>,
];
