/**
 * Type to check if a value is true
 *
 * 값이 true인지 확인하는 타입
 *
 * @param T Value to check / 확인할 값
 * @returns Returns true if value is true, otherwise returns false / 값이 true이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<true, true>>,
 *   Expect<Equal<false, false>>,
 *   Expect<Equal<Equal<true, false>, false>>,
 * ]
 */
export type Expect<T extends true> = T;
