import { Equal } from '../../commonness/Equal';
import { If } from '../../commonness/If';
import { Extends } from '../../commonness/Extends';
import { Tuple } from '../../primitive/Tuple';

/**
 *
 * Check if an array includes a value
 *
 * 튜플에 값이 포함되어 있는지 확인하는 타입
 *
 * @param T Tuple / 튜플
 *
 * @param U Value to check / 확인할 값
 *
 * @returns Whether the array includes the value / 튜플에 값이 포함되어 있는지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
 *   Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
 *   Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
 *   Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-array/includes
 *
 */

export type Includes<T extends Tuple, U> = If<
  Extends<
    {
      [P in keyof T]: If<Equal<T[P], U>, true, false>;
    },
    { [key: number]: false }
  >,
  false,
  true
>;
