import { Tuple } from '../../primitive';
import { Equal, Expect } from '../../commonness';

/**
 * Add an element to the beginning of an array
 *
 * 배열의 시작에 요소를 추가하는 타입
 *
 * @param T Tuple / 튜플
 * @param U Value to add / 추가할 값
 *
 * @example
 * type cases = [
 *   Expect<Equal<Unshift<[], 1>, [1]>>,
 *   Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
 *   Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
 * ]
 */

export type Unshift<T extends Tuple, U> = [U, ...T];

/**
 * 테스트 코드
 */

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
    Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
  ];
}
