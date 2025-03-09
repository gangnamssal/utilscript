/**
 * Check if a string includes a substring
 *
 * 문자열에 부분 문자열이 포함되어 있는지 확인하는 타입
 *
 * @param T 문자열
 * @returns 문자열에 부분 문자열이 포함되어 있는지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<Includes<'hello', 'e'>, true>>,
 *   Expect<Equal<Includes<'hello', 'a'>, false>>,
 *   Expect<Equal<Includes<'hello', 'lo'>, true>>,
 *   Expect<Equal<Includes<'hello', 'o'>, true>>,
 * ]
 */
export type Includes<T extends string, U extends string> = T extends `${string}${U}${string}`
  ? true
  : false;
