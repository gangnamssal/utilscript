/**
 *
 * Reverses a boolean value
 *
 * 불리언 값을 반전
 *
 * @param T 반전할 불리언 값 / Boolean value to reverse
 *
 * @returns 반전된 불리언 값 / Reversed boolean value
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<Reverse<true>, false>>,
 *   Expect<Equal<Reverse<false>, true>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-boolean/reverse
 *
 */

export type Reverse<T extends boolean> = T extends true ? false : true;
