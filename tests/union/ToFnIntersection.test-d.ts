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
  // 엣지 케이스
  Expect<Equal<ToFnIntersection<never>, unknown>>,
  Expect<Equal<ToFnIntersection<any>, () => any>>,
  Expect<Equal<ToFnIntersection<unknown>, () => unknown>>,
  Expect<Equal<ToFnIntersection<boolean>, (() => true) & (() => false)>>,
  Expect<Equal<ToFnIntersection<null | undefined>, (() => null) & (() => undefined)>>,
  Expect<Equal<ToFnIntersection<{}>, () => {}>>,
  Expect<Equal<ToFnIntersection<[]>, () => []>>,
  Expect<Equal<ToFnIntersection<string | number>, (() => string) & (() => number)>>,
];
