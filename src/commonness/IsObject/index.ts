import { AnyArray } from '../../primitive';
import { Equal } from '../Equal';
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
    Equal<unknown, T> extends true
      ? false
      : T extends (...args: AnyArray) => unknown
        ? false
        : T extends AnyArray
          ? false
          : T extends Record<PropertyKey, unknown>
            ? true
            : object extends T
              ? true
              : false
  >
>;
