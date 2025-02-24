import { Equal, Expect } from '../../commonness';
import { AnyArray } from '../../primitive';

/**
 * Check if an array includes a value
 *
 * 배열에 값이 포함되어 있는지 확인하는 타입
 *
 * @param T 배열
 * @param U 확인할 값
 * @returns 배열에 값이 포함되어 있는지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
 *   Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
 *   Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
 *   Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
 * ]
 */

export type Includes<T extends AnyArray, U> = {
  [P in keyof T]: Equal<T[P], U> extends true ? true : false;
} extends { [key: number]: false }
  ? false
  : true;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  const tuple = ['Kars', 'Esidisi', 'Wamuu', 'Santana'] as const;

  type cases = [
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
    Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
    Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
    Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
    Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
    Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
    Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
    Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
    Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
    Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
    Expect<Equal<Includes<[1], 1 | 2>, false>>,
    Expect<Equal<Includes<[1 | 2], 1>, false>>,
    Expect<Equal<Includes<[null], undefined>, false>>,
    Expect<Equal<Includes<[undefined], null>, false>>,
    Expect<Equal<Includes<typeof tuple, 'Kars'>, true>>,
  ];
}
