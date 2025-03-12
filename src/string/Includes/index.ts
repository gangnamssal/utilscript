/**
 *
 * Check if a string includes a substring
 *
 * 문자열에 부분 문자열이 포함되어 있는지 확인하는 타입
 *
 * @param T String / 문자열
 *
 * @param U Substring / 포함되어 있는지 확인할 부분 문자
 *
 * @returns true if the string includes the substring, false otherwise / 문자열에 부분 문자열이 포함되어 있으면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<Includes<'hello', 'e'>, true>>,
 *   Expect<Equal<Includes<'hello', 'a'>, false>>,
 *   Expect<Equal<Includes<'hello', 'lo'>, true>>,
 *   Expect<Equal<Includes<'hello', 'o'>, true>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-string/includes
 *
 */
export type Includes<T extends string, U extends string> = T extends `${string}${U}${string}`
  ? true
  : false;
