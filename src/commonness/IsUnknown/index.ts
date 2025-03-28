import { If } from '../If';
import { IsAny } from '../IsAny';
import { IsObject } from '../IsObject';

/**
 *
 * Check if the type is unknown
 *
 * 타입이 unknown인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns true if the type is unknown, false otherwise / 타입이 unknown이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsUnknown<unknown>, true>>,
 *   Expect<Equal<IsUnknown<any>, false>>,
 *   Expect<Equal<IsUnknown<string>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-unknown
 *
 */
export type IsUnknown<T> = If<
  IsAny<T>,
  false,
  unknown extends T ? If<IsObject<T>, false, true> : false
>;
