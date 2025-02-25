import { Equal, Expect } from '../../commonness';

/**
 * Convert a string to a union of its characters
 *
 * 문자열을 문자의 유니온으로 변환
 *
 * @param T String / 문자열
 * @returns Union of characters / 문자의 유니온
 *
 * @example
 * type cases = [
 *   Expect<Equal<ToUnion<''>, never>>,
 *   Expect<Equal<ToUnion<'t'>, 't'>>,
 *   Expect<Equal<ToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
 *   Expect<Equal<ToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
 * ]
 */

export type ToUnion<T extends string> = T extends ''
  ? never
  : T extends `${infer First}${infer Rest}`
    ? First | ToUnion<Rest>
    : T;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<ToUnion<''>, never>>,
    Expect<Equal<ToUnion<'t'>, 't'>>,
    Expect<Equal<ToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
    Expect<
      Equal<ToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>
    >,
  ];
}
