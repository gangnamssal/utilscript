import { Tuple } from '../../primitive';

/**
 * Pop
 *
 * 배열의 마지막 요소를 제거하는 타입
 *
 * @param T Tuple / 튜플
 * @returns Popped tuple / 제거된 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
 *   Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
 *   Expect<Equal<Pop<[]>, []>>,
 * ]
 */

export type Pop<T extends Tuple> = T extends readonly [...infer F, unknown] ? F : [];
