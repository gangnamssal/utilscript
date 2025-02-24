import { Expect } from '../Expect';

/**
 * Type to check if two values are equal
 *
 * 두 값이 동일한지 확인하는 타입
 *
 * @param X First value / 첫 번째 값
 * @param Y Second value / 두 번째 값
 * @returns Returns true if values are equal, false if different / 두 값이 동일하면 true, 다르면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<Equal<1, 1>, true>>,
 *   Expect<Equal<Equal<1, 2>, false>>,
 *   Expect<Equal<Equal<'a', 'a'>, true>>,
 *   Expect<Equal<Equal<'a', 'b'>, false>>,
 * ]
 */
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<Equal<1, 1>, true>>,
    Expect<Equal<Equal<1, 2>, false>>,
    Expect<Equal<Equal<'a', 'a'>, true>>,
    Expect<Equal<Equal<'a', 'b'>, false>>,
  ];
}
