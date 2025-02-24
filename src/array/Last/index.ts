import { Tuple } from './../../primitive';
import { Expect, Equal } from './../../commonness';

/**
 * Last
 *
 * Returns the last element of an array
 *
 * 배열의 마지막 요소를 반환하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Last<[]>, never>>,
 *   Expect<Equal<Last<[2]>, 2>>,
 *   Expect<Equal<Last<[3, 2, 1]>, 1>>,
 *   Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
 * ];
 */

export type Last<T extends Tuple> = T extends [...any, infer L] ? L : never;

/**
 * 테스트 코드
 */

// @ts-ignore

if (process.env.NODE_ENV === 'development') {
  const arr = [1, 2, 3];

  type cases = [
    Expect<Equal<Last<[]>, never>>,
    Expect<Equal<Last<[2]>, 2>>,
    Expect<Equal<Last<[3, 2, 1]>, 1>>,
    Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  ];
}
