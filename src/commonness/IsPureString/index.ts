import { Equal } from '../Equal';

/**
 *
 * Check if the type is a pure string
 *
 * 타입이 순수한 문자열인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns true if the type is a pure string, false otherwise / 타입이 순수한 문자열이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsPureString<string>, true>>,
 *   Expect<Equal<IsPureString<string | number>, false>>,
 *   Expect<Equal<IsPureString<'hello'>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-pure-string
 *
 */
export type IsPureString<T> = Equal<T, string>;
