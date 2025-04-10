import { Equal } from '../../commonness/Equal';
import { If } from '../../commonness/If';

/**
 *
 * Check if a string starts with a specific substring
 *
 * 특정 문자열로 시작하는지 확인하는 타입
 *
 * @param T The original string type / 원본 문자열
 *
 * @param U The substring to check / 확인할 문자열
 *
 * @example
 * type cases = [
 *   Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
 *   Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
 *   Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
 *   Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-string/starts-with
 *
 */
export type StartsWith<T extends string, U extends string> = If<
  Equal<T, string>,
  boolean,
  If<Equal<U, string>, false, T extends `${U}${string}` ? true : false>
>;
