/**
 *
 * Get the last character of a string
 *
 * 문자열의 마지막 문자를 가져오는 타입
 *
 * @param S String to get the last character from / 마지막 문자를 가져올 문자열
 *
 * @returns Last character of the string / 문자열의 마지막 문자
 *
 * @example
 * type cases = [
 *   Expect<Equal<Last<'hello'>, 'o'>>,
 *   Expect<Equal<Last<'world'>, 'd'>>,
 *   Expect<Equal<Last<'typescript'>, 't'>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-string/last
 *
 */

export type Last<S extends string, R extends string = ''> = S extends `${string}${infer Rest}`
  ? Rest extends ''
    ? S
    : Last<Rest, Rest>
  : R;
