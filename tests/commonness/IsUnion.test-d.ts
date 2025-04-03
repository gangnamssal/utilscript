import { Equal, Expect } from '../../src/commonness';
import { IsUnion } from '../../src/commonness/IsUnion';

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  // Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
  // Edge cases
  Expect<Equal<IsUnion<any>, false>>,
  Expect<Equal<IsUnion<unknown>, false>>,
  Expect<Equal<IsUnion<string | string>, false>>,
  Expect<Equal<IsUnion<string & number>, false>>,
  Expect<Equal<IsUnion<{} | (() => void)>, true>>,
  Expect<Equal<IsUnion<undefined | 0 | false>, true>>,
  Expect<Equal<IsUnion<boolean>, true>>, // boolean is actually true | false
];

type T = IsUnion<{} | (() => void)>;
