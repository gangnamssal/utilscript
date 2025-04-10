/**
 *
 * Check if T extends U
 *
 * T가 U의 확장인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @param U - The type to check against / 비교할 타입
 *
 * @example
 * type cases = [
 *   Expect<Equal<Extends<string, string>, true>>,
 *   Expect<Equal<Extends<string, number>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/extends
 *
 */
export type Extends<T, U> = [T] extends [U] ? true : false;
