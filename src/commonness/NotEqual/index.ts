import { Equal } from '../Equal';

/**
 *
 * Checks if two values are not equal.
 *
 * 두 값이 다른지 확인합니다.
 *
 * @param X - The first value / 첫 번째 값
 *
 * @param Y - The second value / 두 번째 값
 *
 * @example
 * type cases = [
 *   Expect<NotEqual<1, 2>>,
 *   Expect<NotEqual<'a', 'b'>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/not-equal
 *
 */
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
