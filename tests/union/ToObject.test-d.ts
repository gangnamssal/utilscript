import { Equal, Expect } from '../../src/commonness';
import { ToObject } from '../../src/union';

type cases = [
  Expect<Equal<ToObject<'a' | 'b' | 'c'>, { a: 'a'; b: 'b'; c: 'c' }>>,
  Expect<Equal<ToObject<'a'>, { a: 'a' }>>,
  Expect<Equal<ToObject<string>, { [x: string]: string }>>,
  Expect<Equal<ToObject<'a' | 1>, { a: 'a'; 1: 1 }>>,

  // 엣지 케이스
  Expect<Equal<ToObject<never>, {}>>,
  Expect<Equal<ToObject<any>, { [x: string]: any }>>,
  Expect<Equal<ToObject<number>, { [x: number]: number }>>,
  Expect<Equal<ToObject<'a' | 'b' | number>, { a: 'a'; b: 'b'; [x: number]: number }>>,

  // @ts-expect-error: unknown is not assignable to parameter of type 'PropertyKey'.
  Expect<Equal<ToObject<unknown>, {}>>,
  // @ts-expect-error: unknown is not assignable to parameter of type 'PropertyKey'.
  Expect<Equal<ToObject<null | undefined>, {}>>,
  // @ts-expect-error: symbol is not assignable to parameter of type 'PropertyKey'.
  Expect<Equal<ToObject<symbol>, {}>>,
  // @ts-expect-error: boolean is not assignable to parameter of type 'PropertyKey'.
  Expect<Equal<ToObject<boolean>, { true: true; false: false }>>,
  // @ts-expect-error: object is not assignable to parameter of type 'PropertyKey'.
  Expect<Equal<ToObject<{}>, {}>>,
  // @ts-expect-error: function is not assignable to parameter of type 'PropertyKey'.
  Expect<Equal<ToObject<() => void>, {}>>,
  // @ts-expect-error: array is not assignable to parameter of type 'PropertyKey'.
  Expect<Equal<ToObject<string[]>, {}>>,
];
