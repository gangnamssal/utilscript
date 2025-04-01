import { Length } from '../../array';
import { If } from '../../commonness';
import { GreaterThan } from '../../number';
import { Tuple } from '../../primitive';
import { ToNumber } from '../../string';

type IsZeroOrNegative<T extends number> = T extends 0 ? 0 : ToNumber<`-${T}`>;

type PositiveRange<
  L extends number,
  H extends number,
  T extends Tuple = [],
  Flag = false,
  Result = never,
> =
  Length<T> extends H
    ? Result | Length<T>
    : Length<T> extends L
      ? PositiveRange<L, H, [...T, unknown], true, Length<T>>
      : Flag extends true
        ? PositiveRange<L, H, [...T, unknown], Flag, Result | Length<T>>
        : PositiveRange<L, H, [...T, unknown], Flag, Result>;

type NegativeRange<
  L extends number,
  H extends number,
  T extends Tuple = [],
  Flag = false,
  Result = never,
> =
  Length<T> extends H
    ? Result | IsZeroOrNegative<Length<T>>
    : Length<T> extends L
      ? NegativeRange<L, H, [...T, unknown], true, IsZeroOrNegative<Length<T>>>
      : Flag extends true
        ? NegativeRange<L, H, [...T, unknown], Flag, Result | IsZeroOrNegative<Length<T>>>
        : NegativeRange<L, H, [...T, unknown], Flag, Result>;

/**
 *
 * Create a union of numbers in a given range
 *
 * 주어진 범위의 숫자 유니온을 생성
 *
 * @param L Start of the range / 범위의 시작
 *
 * @param H End of the range / 범위의 끝
 *
 * @param Result Result to return / 반환할 결과
 *
 * @example
 * type cases = [
 *   Expect<Equal<Range<2, 9>, 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>>,
 *   Expect<Equal<Range<0, 2>, 0 | 1 | 2>>,
 *   Expect<Equal<Range<0, 0>, 0>>,
 *   Expect<Equal<Range<-5, 0>, -5 | -4 | -3 | -2 | -1 | 0>>,
 *   Expect<Equal<Range<5, 2>, never>>,
 *   Expect<Equal<Range<-2, 5>, -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5>>,
 *   Expect<Equal<Range<-5, -10>, never>>,
 * ];
 *
 * @link https://www.utilscript.site/docs/usage-union/range
 *
 */

export type Range<L extends number, H extends number> = L extends H
  ? H
  : `${L}` extends `-${infer R extends number}`
    ? `${H}` extends `-${infer S extends number}`
      ? If<
          GreaterThan<R, S>,
          // 둘 다 -일 때, L이 더 큰 경우
          NegativeRange<S, R>,
          // 둘 다 -일 때, H가 더 큰 경우
          never
        >
      : NegativeRange<0, R> | PositiveRange<1, H>
    : `${H}` extends `-${number}`
      ? // L은 +, H는 -
        never
      : If<
          GreaterThan<L, H>,
          // 둘 다 +일 때, L이 더 큰 경우
          never,
          // 둘 다 +일 때, H가 더 큰 경우
          PositiveRange<L, H>
        >;
