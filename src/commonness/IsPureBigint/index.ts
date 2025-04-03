import { IsAny } from '../IsAny';
import { If } from '../If';
import { IsUnion } from '../IsUnion';
import { IsObject } from '../IsObject';
import { IsUnknown } from '../IsUnknown';
import { IsNever } from '../IsNever';

/**
 *
 * Check if the type is a pure bigint
 *
 * 타입이 순수한 bigint인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns true if the type is a pure bigint, false otherwise / 타입이 순수한 bigint이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsPureBigint<bigint>, true>>,
 *   Expect<Equal<IsPureBigint<bigint | number>, false>>,
 *   Expect<Equal<IsPureBigint<number>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-pure-bigint
 *
 */
export type IsPureBigint<T> = If<
  IsNever<T>,
  false,
  If<
    IsAny<T>,
    false,
    If<
      IsUnknown<T>,
      false,
      If<IsObject<T>, false, bigint extends T ? If<IsUnion<T>, false, true> : false>
    >
  >
>;
