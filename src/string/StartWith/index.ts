import { Equal, Expect } from '../../commonness';

/**
 * Check if a string starts with a specific substring
 *
 * 특정 문자열로 시작하는지 확인하는 타입
 *
 * @param T The original string type / 원본 문자열
 * @param U The substring to check / 확인할 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
 *   Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
 *   Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
 *   Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
 * ];
 */
export type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}`
  ? true
  : false;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
    Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
    Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
    Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
    Expect<Equal<StartsWith<'abc', ''>, true>>,
    Expect<Equal<StartsWith<'abc', ' '>, false>>,
    Expect<Equal<StartsWith<'', ''>, true>>,
  ];
}
