import { AnyArray } from '../../primitive/AnyArray';
import { Equal } from '../Equal';
import { Extends } from '../Extends';
import { If } from '../If';
import { IsAny } from '../IsAny';
import { IsNever } from '../IsNever';

/**
 *
 * Check if the type is an object
 *
 * 타입이 객체인지 확인하는 타입
 *
 * @param T Type to check / 확인할 타입
 *
 * @returns Whether the type is an object / 타입이 객체인지 여부
 *
 * @example
 * type cases = [
 *   Expect<Equal<IsObject<{}>, true>>,
 *   Expect<Equal<IsObject<object>, true>>,
 *   Expect<Equal<IsObject<{ a: 1 }>, true>>,
 *   Expect<Equal<IsObject<string>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-commonness/is-object
 *
 */
export type IsObject<T> = If<
  IsNever<T>,
  false,
  If<
    IsAny<T>,
    false,
    If<
      Equal<unknown, T>,
      false,
      If<
        Extends<T, (...args: AnyArray) => unknown>,
        false,
        If<
          Extends<T, AnyArray>,
          false,
          If<Extends<T, Record<PropertyKey, unknown>>, true, If<Extends<object, T>, true, false>>
        >
      >
    >
  >
>;
