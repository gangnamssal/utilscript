import { Equal, Expect } from '../../src/commonness';
import { Unique } from '../../src/string';

type cases = [
  Expect<Equal<Unique<'aabbcc'>, 'abc'>>,
  Expect<Equal<Unique<'aabbbcc'>, 'abc'>>,
  Expect<Equal<Unique<'aabbbccddeeff'>, 'abcdef'>>,
  Expect<
    Equal<
      Unique<'aabbbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'>,
      'abcdefghijklmnopqrstuvwxyz'
    >
  >,
];
