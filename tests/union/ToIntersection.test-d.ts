import { Equal, Expect } from '../../src/commonness';
import { ToIntersection } from '../../src/union';

type cases = [
  Expect<Equal<ToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<ToIntersection<'a' | 'b' | 'c'>, 'a' & 'b' & 'c'>>,
  Expect<
    Equal<ToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>
  >,
];
