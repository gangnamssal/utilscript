import { Tuple } from '../../primitive';

/**
 *
 * Add an element to the beginning of an array
 *
 * 튜플의 시작에 요소를 추가하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @param U Value to add / 추가할 값
 *
 * @returns Tuple with the new element added / 새로운 요소가 추가된 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Unshift<[], 1>, [1]>>,
 *   Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
 *   Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/unshift
 *
 */

export type Unshift<T extends Tuple, U> = [U, ...T];
