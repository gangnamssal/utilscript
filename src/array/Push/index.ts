import { Tuple } from '../../primitive';
import { MatchReadonly } from '../MatchReadonly';

/**
 *
 * Add an element to the end of an array
 *
 * 튜플의 끝에 요소를 추가하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @param U Value to add / 추가할 값
 *
 * @returns Array with the new element added / 새로운 요소가 추가된 배열
 *
 * @example
 * type cases = [
 *   Expect<Equal<Push<[], 1>, [1]>>,
 *   Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
 *   Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/push
 *
 */

export type Push<T extends Tuple, U> = MatchReadonly<T, [...T, U]>;
