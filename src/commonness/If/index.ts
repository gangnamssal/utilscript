/**
 * Type to return a value based on a condition
 *
 * 조건에 따라 값을 반환하는 타입
 *
 * @param C Condition / 조건
 * @param T True / 참
 * @param F False / 거짓
 *
 * @example
 * type cases = [
 *   Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
 *   Expect<Equal<If<false, 'a', 2>, 2>>,
 *   Expect<Equal<If<boolean, 'a', 2>, 'a' | 2>>,
 * ]
 */

export type If<C extends boolean, T, F> = C extends boolean ? (C extends true ? T : F) : never;
