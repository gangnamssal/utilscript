/**
 *
 * Create an array of a given length
 *
 * 주어진 길이의 튜플을 생성
 *
 * @param L - Length of the array / 튜플의 길이
 *
 * @returns Array of the given length / 주어진 길이의 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<From<0>, []>>,
 *   Expect<Equal<From<2>, [unknown, unknown]>>,
 *   Expect<Equal<From<999>['length'], 999>>,
 *   Expect<Equal<From<1000>['length'], 1000>> // type error,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-array/from
 *
 */
export type From<L extends number, Tuple extends Array<unknown> = []> = Tuple['length'] extends L
  ? Tuple
  : From<L, [...Tuple, unknown]>;
