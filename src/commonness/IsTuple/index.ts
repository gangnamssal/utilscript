import { Equal } from '../Equal';
import { Expect } from '../Expect';
import { IsNever } from '../IsNever';

/**
 * Type to check if a type is a tuple
 *
 * 타입이 튜플인지 확인하는 타입
 *
 * @param T Type to check / 타입
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
 */

export type IsTuple<T> =
  IsNever<T> extends true
    ? false
    : T extends ReadonlyArray<unknown>
      ? number extends T['length']
        ? false
        : true
      : false;

/**
 * 테스트 코드
 */
// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  type cases = [
    Expect<Equal<IsTuple<[]>, true>>,
    Expect<Equal<IsTuple<[number]>, true>>,
    Expect<Equal<IsTuple<readonly [1]>, true>>,
    Expect<Equal<IsTuple<{ length: 1 }>, false>>,
    Expect<Equal<IsTuple<number[]>, false>>,
    Expect<Equal<IsTuple<never>, false>>,
  ];
}
