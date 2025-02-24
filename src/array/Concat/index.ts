import { AnyArray } from '../../primitive';
import { Equal, Expect } from '../../commonness';

/**
 * Type to concatenate two arrays
 *
 * 두 배열을 연결하는 타입
 *
 * @param T First array / 첫 번째 배열
 * @param U Second array / 두 번째 배열
 * @returns Concatenated array / 연결된 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Concat<[], []>, []>>,
 *   Expect<Equal<Concat<[], [1]>, [1]>>,
 *   Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
 *   Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
 * ]
 */

export type Concat<T extends AnyArray, U extends AnyArray> = [...T, ...U];

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  const tuple = [1] as const;

  type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
  ];

  // @ts-expect-error
  type error = Concat<null, undefined>;
}
