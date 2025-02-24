import { Equal, Expect } from '../../commonness';
import { Tuple } from '../../primitive';

/**
 * Add an element to the end of an array
 *
 * 배열의 끝에 요소를 추가하는 타입
 *
 * @param T Tuple / 튜플
 * @param U Value to add / 추가할 값
 *
 * @example
 * type cases = [
 *   Expect<Equal<Push<[], 1>, [1]>>,
 *   Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
 *   Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
 * ]
 */

export type Push<T extends Tuple, U> = [...T, U];

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<Push<[], 1>, [1]>>,
    Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
    Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
  ];
}
