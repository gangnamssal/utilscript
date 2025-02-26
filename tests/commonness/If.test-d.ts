import { Equal, Expect } from '../../src/commonness';
import { If } from '../../src/commonness/If';

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
  Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
];

// @ts-expect-error: type error
type error = If<null, 'a', 'b'>;
