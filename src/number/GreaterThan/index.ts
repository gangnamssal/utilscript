import { Push, Length } from '../../array';
import { Reverse } from '../../boolean';
import { If } from '../../commonness/If';
import { Extends } from '../../commonness/Extends';
import { Tuple } from '../../primitive';
import { ToString } from '../ToString';

type NumberToArray<
  S extends string,
  T extends Tuple<number> = [],
> = S extends `${infer Digit extends number}${infer Rest}`
  ? NumberToArray<Rest, Push<T, Digit>>
  : S extends `-${infer Digit extends number}${infer Rest}`
    ? NumberToArray<Rest, Push<T, Digit>>
    : T;

type CompareDigit<
  T extends number,
  U extends number,
  A extends Tuple = [],
  B extends Tuple = [],
> = If<
  Extends<Length<A>, T>,
  If<Extends<Length<B>, U>, 'equal', 'less'>,
  Length<B> extends U ? 'greater' : CompareDigit<T, U, Push<A, unknown>, Push<B, unknown>>
>;

type GreaterThanHelper<
  T extends number,
  U extends number,
  A extends Tuple<number> = NumberToArray<ToString<T>>,
  B extends Tuple<number> = NumberToArray<ToString<U>>,
  Index extends Tuple = [],
> = If<
  Extends<CompareDigit<Length<A>, Length<B>>, 'greater'>,
  true,
  CompareDigit<Length<A>, Length<B>> extends 'less'
    ? false
    : CompareDigit<A[Length<Index>], B[Length<Index>]> extends 'greater'
      ? true
      : CompareDigit<A[Length<Index>], B[Length<Index>]> extends 'less'
        ? false
        : Length<Push<Index, unknown>> extends Length<A> | Length<B>
          ? false
          : GreaterThanHelper<T, U, A, B, Push<Index, unknown>>
>;

/**
 *
 * Type that checks if the first number is greater than the second number
 *
 * 두 숫자를 비교하여 첫 번째 숫자가 두 번째 숫자보다 큰지 확인하는 타입
 *
 * @param T 비교할 첫 번째 숫자 / First number to compare
 *
 * @param U 비교할 두 번째 숫자 / Second number to compare
 *
 * @returns T > U 여부를 나타내는 boolean / boolean representing whether T > U
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<GreaterThan<1, 0>, true>>,
 *   Expect<Equal<GreaterThan<5, 3>, true>>,
 *   Expect<Equal<GreaterThan<-1, -2>, true>>,
 *   Expect<Equal<GreaterThan<3, 5>, false>>,
 *   Expect<Equal<GreaterThan<0, 1>, false>>,
 * ]
 *
 * @link https://www.utilscript.site/docs/usage-number/greater-than
 *
 */
export type GreaterThan<T extends number, U extends number> = If<
  Extends<`${T}`, `-${number}`>,
  If<Extends<`${U}`, `-${number}`>, Reverse<GreaterThanHelper<T, U>>, false>,
  If<Extends<`${U}`, `-${number}`>, true, GreaterThanHelper<T, U>>
>;
