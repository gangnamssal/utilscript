import { Tuple } from '../../primitive';

/**
 * Type to concatenate two tuples
 *
 * 두 튜플을 연결하는 타입
 *
 * @param T First tuple / 첫 번째 튜플
 * @param U Second tuple / 두 번째 튜플
 * @returns Concatenated tuple / 연결된 튜플
 *
 * @example
 * type cases = [
 *   Expect<Equal<Concat<[], []>, []>>,
 *   Expect<Equal<Concat<[], [1]>, [1]>>,
 *   Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
 *   Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
 * ]
 */

export type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];
