/**
 * Replace all occurrences of a substring with another substring
 *
 * 문자열의 모든 부분 문자열을 다른 부분 문자열로 교체하는 타입
 *
 * @param S String / 문자열
 * @param From Substring to replace / 교체할 부분 문자열
 * @param To Substring to replace with / 교체할 부분 문자열
 * @returns Replaced string / 교체된 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
 *   Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
 *   Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
 *   Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
 *   Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
 *   Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
 *   Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
 *   Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
 *   Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
 * ]
 */

export type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Left}${From}${infer Right}`
    ? `${Left}${To}${ReplaceAll<Right, From, To>}`
    : S;
