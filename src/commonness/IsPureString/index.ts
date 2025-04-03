import { IsAny } from '../IsAny';
import { If } from '../If';
import { IsUnion } from '../IsUnion';
import { IsObject } from '../IsObject';
import { IsUnknown } from '../IsUnknown';
import { IsNever } from '../IsNever';

/**
 *
 * Check if the type is a pure string
 *
 * 타입이 순수한 문자열인지 확인합니다.
 *
 * @param T - The type to check / 확인할 타입
 *
 * @returns true if the type is a pure string, false otherwise / 타입이 순수한 문자열이면 true, 아니면 false
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsPureString<string>, true>>,
 *   Expect<Equal<IsPureString<string | number>, false>>,
 *   Expect<Equal<IsPureString<'hello'>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-pure-string
 *
 */
export type IsPureString<T> = If<
  IsNever<T>,
  false,
  If<
    IsAny<T>,
    false,
    If<
      IsUnknown<T>,
      false,
      If<IsObject<T>, false, string extends T ? If<IsUnion<T>, false, true> : false>
    >
  >
>;
