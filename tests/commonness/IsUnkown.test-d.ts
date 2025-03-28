import { Equal, Expect, IsUnknown } from '../../src/commonness';

type cases = [
  Expect<Equal<IsUnknown<unknown>, true>>,
  Expect<Equal<IsUnknown<any>, false>>,
  Expect<Equal<IsUnknown<never>, false>>,
  Expect<Equal<IsUnknown<string>, false>>,

  // 엣지 케이스
  Expect<Equal<IsUnknown<unknown | null>, true>>,
  Expect<Equal<IsUnknown<unknown & string>, false>>,
  Expect<Equal<IsUnknown<{}>, false>>,
  Expect<Equal<IsUnknown<object>, false>>,
  Expect<Equal<IsUnknown<undefined>, false>>,
  Expect<Equal<IsUnknown<null>, false>>,
  Expect<Equal<IsUnknown<unknown[]>, false>>,
  Expect<Equal<IsUnknown<Record<string, unknown>>, false>>,
  Expect<Equal<IsUnknown<unknown extends infer U ? U : never>, true>>,

  // 추가 엣지 케이스
  Expect<Equal<IsUnknown<unknown & {}>, false>>,
  Expect<Equal<IsUnknown<unknown | string>, true>>,
  Expect<Equal<IsUnknown<unknown | any>, false>>,
  Expect<Equal<IsUnknown<unknown & any>, false>>,
  Expect<Equal<IsUnknown<unknown & never>, false>>,
  Expect<Equal<IsUnknown<keyof unknown>, false>>,
  Expect<Equal<IsUnknown<Record<any, string>>, false>>,
  Expect<Equal<IsUnknown<{ prop: unknown }>, false>>,
  Expect<Equal<IsUnknown<() => unknown>, false>>,
];
