import { Equal, Expect } from '../../src/commonness';
import { Length } from '../../src/string';

type cases = [
  Expect<Equal<Length<'abc'>, 3>>,
  Expect<Equal<Length<''>, 0>>,
  // 엣지케이스 추가
  Expect<Equal<Length<'a'>, 1>>,
  Expect<Equal<Length<'hello world'>, 11>>,
  Expect<Equal<Length<'한글'>, 2>>,
  Expect<Equal<Length<'🚀'>, 2>>,
  Expect<Equal<Length<'123456789'>, 9>>,
];

type errors = [
  // @ts-expect-error: type error
  Length<5>,
  // @ts-expect-error: type error
  Length<[1, 2, 3]>,
  // @ts-expect-error: type error
  Length<null>,
  // @ts-expect-error: type error
  Length<undefined>,
];
