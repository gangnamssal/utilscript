/**
 * Check if a string ends with a specific substring
 *
 * 특정 문자열로 끝나는지 확인하는 타입
 *
 * @param T The original string type / 원본 문자열
 * @param U The substring to check / 확인할 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
 *   Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
 *   Expect<Equal<EndsWith<'abc', 'd'>, false>>,
 *   Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
 * ];
 */
export type EndsWith<T extends string, U extends string> = T extends `${infer _}${U}`
  ? true
  : false;
