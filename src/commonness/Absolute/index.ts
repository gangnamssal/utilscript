import { Equal } from '../Equal';
import { If } from '../If';
import { IsAny } from '../IsAny';
import { IsUnknown } from '../IsUnknown';

/**
 *
 * Get the absolute value of a number or string
 *
 * 숫자 또는 문자열의 절대값을 가져옵니다.
 *
 * @param T - The number or string to get the absolute value of / 절대값을 가져올 숫자 또는 문자열
 *
 * @returns The absolute value of the number or string / 숫자 또는 문자열의 절대값
 *
 * @example
 *
 * type cases = [
 *   Expect<Equal<Absolute<0>, '0'>>,
 *   Expect<Equal<Absolute<-0>, '0'>>,
 *   Expect<Equal<Absolute<10>, '10'>>,
 *   Expect<Equal<Absolute<-5>, '5'>>,
 * ]
 *
 */

export type Absolute<T extends number | string | bigint> = If<
  IsAny<T>,
  never,
  If<
    IsUnknown<T>,
    never,
    `${T}` extends `-${infer Rest extends number | bigint}`
      ? Absolute<Rest>
      : T extends `${number}`
        ? `${T}`
        : T extends number
          ? If<Equal<T, number>, never, `${T}`>
          : T extends bigint
            ? If<Equal<T, bigint>, never, `${T}`>
            : never
  >
>;
