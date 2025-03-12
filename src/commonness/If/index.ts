/**
 *
 * Type to return a value based on a condition
 *
 * 조건에 따라 값을 반환하는 타입
 *
 * @param C Condition to evaluate / 판단할 조건
 *
 * @param T Value to return if condition is true / 조건이 참일 때 반환할 값
 *
 * @param F Value to return if condition is false / 조건이 거짓일 때 반환할 값
 *
 * @example
 * type cases = [
 *   Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
 *   Expect<Equal<If<false, 'a', 2>, 2>>,
 *   Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/if
 *
 */

export type If<C extends boolean, T, F> = C extends boolean ? (C extends true ? T : F) : never;
