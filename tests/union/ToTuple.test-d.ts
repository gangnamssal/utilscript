import { Equal, Expect } from '../../src/commonness';
import { ToTuple } from '../../src/union/ToTuple';
import { ToUnion } from '../../src/array/ToUnion';

type cases = [
  Expect<Equal<ToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ToUnion<ToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ToUnion<ToTuple<'a'>>, 'a'>>,
  Expect<Equal<ToUnion<ToTuple<any>>, any>>,
  Expect<Equal<ToUnion<ToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ToUnion<ToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ToUnion<ToTuple<any | 1>>, any>>,
  Expect<Equal<ToUnion<ToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ToUnion<ToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ToUnion<ToTuple<never>>, never>>,
  Expect<
    Equal<
      ToUnion<ToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>,
      'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'
    >
  >,
  // 추가된 엣지 케이스
  Expect<Equal<ToTuple<boolean>['length'], 2>>,
  Expect<Equal<ToUnion<ToTuple<boolean>>, boolean>>,
  Expect<Equal<ToTuple<number | string | boolean>['length'], 4>>,
  Expect<Equal<ToUnion<ToTuple<number | string | boolean>>, number | string | boolean>>,
  Expect<Equal<ToUnion<ToTuple<null | undefined>>, null | undefined>>,
  Expect<Equal<ToUnion<ToTuple<{} | [] | null>>, {} | [] | null>>,
  Expect<Equal<ToUnion<ToTuple<symbol>>, symbol>>,
  // 더 추가된 엣지 케이스
  Expect<Equal<ToTuple<unknown>['length'], 1>>,
  Expect<Equal<ToUnion<ToTuple<unknown>>, unknown>>,
  Expect<Equal<ToTuple<object>['length'], 1>>,
  Expect<Equal<ToUnion<ToTuple<object>>, object>>,
  Expect<Equal<ToTuple<() => void>['length'], 1>>,
  Expect<Equal<ToUnion<ToTuple<() => void>>, () => void>>,
  Expect<Equal<ToTuple<Record<string, any>>['length'], 1>>,
  Expect<Equal<ToUnion<ToTuple<Record<string, any>>>, Record<string, any>>>,
  Expect<Equal<ToTuple<Promise<any>>['length'], 1>>,
  Expect<Equal<ToUnion<ToTuple<Promise<any>>>, Promise<any>>>,
  Expect<Equal<ToTuple<readonly string[]>['length'], 1>>,
  Expect<Equal<ToUnion<ToTuple<readonly string[]>>, readonly string[]>>,
];

type T = ToTuple<boolean>;
