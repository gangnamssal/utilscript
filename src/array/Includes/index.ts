import { Equal } from '../../commonness';
import { Tuple } from '../../primitive';

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

export type Includes<T extends Tuple, U> = {
  [P in keyof T]: Equal<T[P], U> extends true ? true : false;
} extends { [key: number]: false }
  ? false
  : true;
