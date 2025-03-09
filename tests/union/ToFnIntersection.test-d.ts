import { Equal, Expect } from '../../src/commonness';
import { ToFnIntersection } from '../../src/union';

type cases = [
  Expect<Equal<ToFnIntersection<'foo' | 42 | true>, (() => 'foo') & (() => 42) & (() => true)>>,
  Expect<Equal<ToFnIntersection<'a' | 'b' | 'c'>, (() => 'a') & (() => 'b') & (() => 'c')>>,
  Expect<
    Equal<
      ToFnIntersection<(() => 'foo') | ((i: 42) => true)>,
      (() => () => 'foo') & (() => (i: 42) => true)
    >
  >,
];
