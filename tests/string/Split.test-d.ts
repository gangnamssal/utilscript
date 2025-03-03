import { Equal, Expect } from '../../src/commonness';
import { Split } from '../../src/string';

type cases = [
  Expect<Equal<Split<'hello world'>, ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']>>,
  Expect<Equal<Split<'hello world', ' '>, ['hello', 'world']>>,
  Expect<Equal<Split<'hello world', 'o'>, ['hell', ' w', 'rld']>>,
  Expect<Equal<Split<'helloworld', 'o'>, ['hell', 'w', 'rld']>>,
];
