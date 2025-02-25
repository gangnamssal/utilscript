import { Equal, Expect } from '../../commonness';

/**
 * Replace a substring with another substring
 *
 * 문자열의 부분 문자열을 다른 부분 문자열로 교체하는 타입
 *
 * @param S String / 문자열
 * @param From Substring to replace / 교체할 부분 문자열
 * @param To Substring to replace with / 교체할 부분 문자열
 * @returns Replaced string / 교체된 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
 *   Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
 *   Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
 *   Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
 *   Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
 *   Expect<Equal<Replace<'', '', ''>, ''>>,
 * ]
 */

export type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${Right}`
    : S;

/**
 * 테스트 코드
 */
// @ts-ignore

if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
    Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
    Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
    Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
    Expect<Equal<Replace<'', '', ''>, ''>>,
  ];
}
