import { IsAny } from '../IsAny';
import { If } from '../If';
import { IsUnion } from '../IsUnion';
import { IsObject } from '../IsObject';
import { IsUnknown } from '../IsUnknown';
import { IsNever } from '../IsNever';

/**
 *
 * Check if the type is a pure number
 *
 * 타입이 순수한 숫자인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns true if the type is a pure number, false otherwise / 타입이 순수한 숫자이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsPureNumber<number>, true>>,
 *   Expect<Equal<IsPureNumber<bigint | number>, false>>,
 *   Expect<Equal<IsPureNumber<123>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-pure-number
 *
 */
export type IsPureNumber<T> = If<
  IsNever<T>,
  false,
  If<
    IsAny<T>,
    false,
    If<
      IsUnknown<T>,
      false,
      If<IsObject<T>, false, number extends T ? If<IsUnion<T>, false, true> : false>
    >
  >
>;
