import { Tuple } from '../../primitive';
import { If } from '../If';
import { IsNever } from '../IsNever';
import { Length } from '../../array/Length';

/**
 *
 * Type to check if a type is a tuple
 *
 * 타입이 튜플인지 확인하는 타입
 *
 * @param T Type to check / 타입
 *
 * @returns Whether the type is a tuple / 타입이 튜플인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsTuple<[]>, true>>,
 *   Expect<Equal<IsTuple<[number]>, true>>,
 *   Expect<Equal<IsTuple<readonly [1]>, true>>,
 *   Expect<Equal<IsTuple<{ length: 1 }>, false>>,
 *   Expect<Equal<IsTuple<number[]>, false>>,
 *   Expect<Equal<IsTuple<never>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-tuple
 *
 */

export type IsTuple<T> = If<
  IsNever<T>,
  false,
  T extends Tuple ? (number extends Length<T> ? false : true) : false
>;
