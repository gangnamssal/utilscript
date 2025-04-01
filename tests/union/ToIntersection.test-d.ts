import { Equal, Expect } from '../../src/commonness';
import { ToIntersection } from '../../src/union';

type cases = [
  Expect<Equal<ToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<ToIntersection<'a' | 'b' | 'c'>, 'a' & 'b' & 'c'>>,
  Expect<
    Equal<ToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>
  >,
  // 엣지 케이스
  Expect<Equal<ToIntersection<never>, never>>,
  Expect<Equal<ToIntersection<any>, any>>,
  Expect<Equal<ToIntersection<unknown>, unknown>>,
  Expect<Equal<ToIntersection<boolean>, true & false>>,
  Expect<Equal<ToIntersection<null | undefined>, null & undefined>>,
  Expect<Equal<ToIntersection<{} | []>, {} & []>>,
  Expect<Equal<ToIntersection<string | number>, string & number>>,
  Expect<Equal<ToIntersection<{ a: 1 } | { b: 2 }>, { a: 1 } & { b: 2 }>>,
];
