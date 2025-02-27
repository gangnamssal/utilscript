import { Equal, Expect } from '../../src/commonness';
import { IndexOf } from '../../src/string';

type cases = [
  Expect<Equal<IndexOf<'hello', 'e'>, 1>>,
  Expect<Equal<IndexOf<'hello', 'o'>, 4>>,
  Expect<Equal<IndexOf<'hello', 'x'>, -1>>,
  Expect<Equal<IndexOf<'hello', 'el'>, 1>>,
  Expect<Equal<IndexOf<'hello', 'lo'>, 2>>,

  // @ts-expect-error: type error
  IndexOf<'hello', 1>,
];
